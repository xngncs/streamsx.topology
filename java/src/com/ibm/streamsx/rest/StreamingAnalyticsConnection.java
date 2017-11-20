/*
# Licensed Materials - Property of IBM
# Copyright IBM Corp. 2017
 */
package com.ibm.streamsx.rest;

import static com.ibm.streamsx.topology.context.AnalyticsServiceProperties.SERVICE_NAME;
import static com.ibm.streamsx.topology.context.AnalyticsServiceProperties.VCAP_SERVICES;

import java.io.IOException;

import com.google.gson.JsonObject;
import com.ibm.streamsx.rest.StreamsConnection.InvalidStreamsConnection;

/**
 * Connection to a Streaming Analytics Instance.
 * <p>
 * This class exists for backward compatibility. Users should instead create
 * instances of {@link IStreamingAnalyticsConnection} using the factory
 * methods in {@link StreamsRestFactory}.
 */

@Deprecated
public class StreamingAnalyticsConnection extends StreamsConnection
        implements IStreamingAnalyticsConnection {

    private JsonObject config;

    private StreamingAnalyticsConnection(
            IStreamingAnalyticsConnection delegate,
            boolean allowInsecure) {
        super(delegate, allowInsecure);
    }

    /**
     * Connection to IBM Streaming Analytics service
     *
     * @param credentialsFile
     *            Credentials from the Streaming Analytics File
     * @param serviceName
     *            Name of the service in the file above
     * @return a connection to IBM Streaming Analytics service
     * @throws IOException
     */
    public static StreamingAnalyticsConnection createInstance(String credentialsFile,
            String serviceName) throws IOException {

        JsonObject config = new JsonObject();

        config.addProperty(SERVICE_NAME, serviceName);
        config.addProperty(VCAP_SERVICES, credentialsFile);

        return newInstance(config);
    }

    public static StreamingAnalyticsConnection newInstance(JsonObject config)
            throws IOException {
        return createInstance(config, false);
    }

    /**
     * This function is used to disable checking the trusted certificate chain
     * and should never be used in production environments
     * 
     * @param allowInsecure
     *            <ul>
     *            <li>true - disables checking</li>
     *            <li>false - enables checking (default)</li>
     *            </ul>
     * @return a boolean indicating the state of the connection after this
     *         method was called.
     *         <ul>
     *         <li>true - if checking is disabled</li>
     *         <li>false - if checking is enabled</li>
     *         </ul>
     */
    @Override
    public boolean allowInsecureHosts(boolean allowInsecure) {
        if (allowInsecure != this.allowInsecure && null != this.config) {
            try {
                delegate =
                        StreamsRestFactory.createStreamingAnalyticsConnection(config,
                                allowInsecure);
                this.allowInsecure = allowInsecure; 
            } catch (IOException e) {
                // Don't change current allowInsecure but update delegate in
                // case new exception is more informative.
                delegate = new InvalidStreamsConnection(e);
            }
        }
        return this.allowInsecure;
    }

    /**
     * Gets the {@link Instance IBM Streams Instance} object for the Streaming
     * Analytics service.
     *
     * @return an {@link Instance IBM Streams Instance} associated with this
     *         connection
     *
     * @throws IOException
     */
    public Instance getInstance() throws IOException {
        return streamingAnalyticsConnection().getInstance();
    }

    @Override
    public boolean cancelJob(String jobId) throws Exception {
        Instance instance = streamingAnalyticsConnection().getInstance();
        return instance.getJob(jobId).cancel();
    }

    private static StreamingAnalyticsConnection createInstance(
            JsonObject config, boolean allowInsecure) throws IOException {
        IStreamingAnalyticsConnection delegate =
                StreamsRestFactory.createStreamingAnalyticsConnection(config,
                        allowInsecure);
        StreamingAnalyticsConnection sac = new StreamingAnalyticsConnection(delegate, allowInsecure);
        sac.config = config;
        return sac;
    }

    private IStreamingAnalyticsConnection streamingAnalyticsConnection() {
        // We know the cast is safe, because this class' constructor requires
        // StreamingAnalyticsConnectionInterface as the delegate.
        return (IStreamingAnalyticsConnection)delegate;
    }
}
