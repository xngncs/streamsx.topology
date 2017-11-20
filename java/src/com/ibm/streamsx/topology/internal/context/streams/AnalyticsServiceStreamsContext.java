/*
# Licensed Materials - Property of IBM
# Copyright IBM Corp. 2015  
 */
package com.ibm.streamsx.topology.internal.context.streams;

import static com.ibm.streamsx.topology.internal.context.remote.DeployKeys.deploy;
import static com.ibm.streamsx.topology.internal.context.remote.DeployKeys.keepArtifacts;
import static com.ibm.streamsx.topology.internal.streaminganalytics.VcapServices.getVCAPService;

import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.Future;

import com.google.gson.JsonObject;
import com.ibm.streamsx.rest.StreamingAnalyticsService;
import com.ibm.streamsx.rest.StreamsRestFactory;
import com.ibm.streamsx.topology.internal.process.CompletedFuture;

public class AnalyticsServiceStreamsContext extends
        BundleUserStreamsContext<BigInteger> {

    private final Type type;
    
    public AnalyticsServiceStreamsContext(Type type) {
        super(false);
        this.type = type;
    }

    @Override
    public Type getType() {
        return type;
    }
    
    @Override
    Future<BigInteger> invoke(AppEntity entity, File bundle) throws Exception {
        try {           
            BigInteger jobId = submitJobToService(bundle, entity.submission);
         
            return new CompletedFuture<BigInteger>(jobId);
        } finally {
            if (!keepArtifacts(entity.submission))
                bundle.delete();
        }
    }
    
    /**
     * Verify we have a valid Streaming Analytic service
     * information before we attempt anything.
     */
    @Override
    protected void preSubmit(AppEntity entity) {
        
            
        try {
            if (entity.submission != null)
                getVCAPService(deploy(entity.submission));
        } catch (IOException e) {
            throw new IllegalArgumentException(e);
        }
    } 
    
    /*
   
    private JsonObject getBluemixSubmitConfig( Map<String, Object> config) throws IOException {
        
        JobConfig jc = JobConfig.fromProperties(config);
        
        // Streaming Analytics service is always using 4.2 or later
        // so use the job config overlay
            
        JobConfigOverlay jco = new JobConfigOverlay(jc);
        
        return jco.fullOverlayAsJSON(new JsonObject());
    }
    */
    
    private BigInteger submitJobToService(File bundle, JsonObject submission) throws IOException {
        JsonObject deploy =  deploy(submission);
        
        final JsonObject service = getVCAPService(deploy);
        final StreamingAnalyticsService sas = StreamsRestFactory.createStreamingAnalyticsService(service);
        return sas.submitJob(bundle, submission);
    }
}
