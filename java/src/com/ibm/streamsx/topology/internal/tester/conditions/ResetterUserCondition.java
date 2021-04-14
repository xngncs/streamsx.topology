/*
# Licensed Materials - Property of IBM
# Copyright IBM Corp. 2018  
 */
package com.ibm.streamsx.topology.internal.tester.conditions;

import java.util.HashMap;
import java.util.Map;

import com.ibm.streamsx.topology.Topology;
import com.ibm.streamsx.topology.builder.BOperatorInvocation;

/**
 * Condition that becomes valid after all consistent regions in
 * the application have been reset at least minimumResets times
 * (defaulting to 10).
 *
 */
public final class ResetterUserCondition extends UserCondition<Void>
      implements NoStreamCondition {
    
    private final Integer minimumResets;
    
    public ResetterUserCondition(Integer minimumResets) {
        super(null);
        this.minimumResets = minimumResets;
    }
    
    public long getMinimumResets() {
        return minimumResets == null ? 10 : minimumResets;
    }

    @Override
    public String toString() {
        return "Consistent region resetter (minimumResets=" + getMinimumResets() + ")";
    }
    
    /**
     * Add the Resetter operator (no ports) that discovers the
     * consistent regions using JCP and randomly resets them.
     * @deprecated since the removal of JCP.
     */
    @Override
    public void addTo(Topology topology, String conditionName) {

    }
}
