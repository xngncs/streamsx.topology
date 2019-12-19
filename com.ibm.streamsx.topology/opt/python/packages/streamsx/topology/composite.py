# coding=utf-8
# Licensed Materials - Property of IBM
# Copyright IBM Corp. 2019


__all__ = [ 'Source', 'Map', 'ForEach']

import streamsx._streams._version
__version__ = streamsx._streams._version.__version__

from abc import ABC, abstractmethod
import streamsx.topology.topology

class Composite(ABC):
    """
    Composite transformationss support a single logical transformation
    being a composite of one or more basic transformations.

    A composite transformation is implemented as a sub-class
    of :py:class:`Source`, :py:class:`Map` or :py:class:`ForEach`
    whose ``populate`` method populates the topology with the
    required basic transformations. For example a ``Source`` composite
    might have use :py:meth:`~Topology.source` followed by a
    :py:meth:`~Stream.filter` to filter out unwanted events
    and then a :py:meth:`~Stream.map` to parse the event into
    a structured schema.

    Composites may use other composites during ``populate``.

    """
    def __init__(self):
        self.group = True
        ns = self.__class__.__module__
        if ns == '__main__':
            self.kind = self.__class__.__name__
        else:
            self.kind = ns + '::' + self.__class__.__name__

    @classmethod
    def _check_type(cls, obj, type_):
        if not isinstance(obj, type_):
            raise TypeError()

    def _set_group(self, name):
        if self.group:
            pass


class Source(Composite):
    """
    Abstract composite source.

    An instance of a subclass can be passed to :py:meth:`~Topology.source`
    to create a source stream that is composed of one or more basic transformations.

    Example assuming ``RawTweets`` is Python iterable that produces
    raw tweets::

        class Tweets(streamsx.topology.composite.Source):
            def ___init__(self, track):
                self.track = track
     
            def populate(self, topology, name, **options):
                # get all the tweets
                tweets = topology.source(RawTweets(track=self.track), name=name)
                # filter so that only with a message are returned
                return tweets.filter(lambda tweet : tweet['text'])

    This class can then be used as follows::

        topo = Topology()
        gf_tweets = topo.source(Tweets(track=['glutenfree', 'gf']))

    """

    def _add(self, topology, name, **options):
        s = self.populate(topology, name, **options)
        Source._check_type(s, streamsx.topology.topology.Stream)
        return s

    @abstractmethod
    def populate(self, topology:streamsx.topology.topology.Topology, name, **options) -> streamsx.topology.topology.Stream:
        """
        Populate the topology with this composite source.

        Returns:
            Stream: Single stream representing the source.
        """
        pass


class Map(Composite):
    """
    Abstract composite map transformation.

    An instance of a subclass can be passed to :py:meth:`~streamsx.topology.topology.Stream.map`
    to create a stream that is composed of one or more basic transformations
    of an input stream.

    Example assuming ``RawTweets`` is Python iterable that produces
    raw tweets::

        class WordCount(streamsx.topology.composite.Map):
            def ___init__(self, period, update):
                self.period = period
                self.update = update
     
            def populate(self, topology, stream, schema, name, **options):
                words = stream.map(lambda line : line.split(), schema=str)
                win = words.last(size=self.period).trigger(self.update).partition(lambda s : s)
                return win.aggregate(lambda values : (values[0], len(values)))
    """

    def _add(self, stream, schema, name, **options):
        s = self.populate(stream.topology, stream, schema, name, **options)
        Map._check_type(s, streamsx.topology.topology.Stream)
        return s

    @abstractmethod
    def populate(self, topology:streamsx.topology.topology.Topology, stream:streamsx.topology.topology.Stream, schema, name, **options) -> streamsx.topology.topology.Stream:
        """
        Populate the topology with this composite map transformation.

        Returns:
            Stream: Single stream representing the transformation of `stream`.
        """
        pass


class ForEach(Composite):

    def _add(self, stream, name, **options):
        s = self.populate(stream.topology, stream, name, **options)
        ForEach._check_type(s, streamsx.topology.topology.Sink)
        return s

    @abstractmethod
    def populate(self, topology, stream, name, **options):
        pass