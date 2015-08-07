/*
# Licensed Materials - Property of IBM
# Copyright IBM Corp. 2015  
 */
package com.ibm.streamsx.topology.internal.functional.window;

import com.ibm.streams.operator.Tuple;
import com.ibm.streams.operator.window.StreamWindow;
import com.ibm.streamsx.topology.function.Function;
import com.ibm.streamsx.topology.internal.functional.ops.FunctionWindow;

public class PartitionedSlidingJoin<T, U, J> extends SlidingJoin<T, U, J> {

    private final Function<Object,Object> functionKeyGetter;
    public PartitionedSlidingJoin(FunctionWindow op,
            StreamWindow<Tuple> window, Function<Object,Object> functionKeyGetter) throws Exception {
        super(op, window);
        this.functionKeyGetter = functionKeyGetter;
    }

    @Override
    protected Object getPort1PartitionKey(T tTuple) {
        return functionKeyGetter.apply(tTuple);
    }
}
