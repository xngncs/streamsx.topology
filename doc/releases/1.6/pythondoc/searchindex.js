Search.setIndex({docnames:["index","modules","streamsx","streamsx.ec","streamsx.rest","streamsx.rest_errors","streamsx.rest_primitives","streamsx.spl","streamsx.spl.op","streamsx.spl.spl","streamsx.spl.toolkit","streamsx.spl.types","streamsx.topology","streamsx.topology.context","streamsx.topology.mqtt","streamsx.topology.schema","streamsx.topology.tester","streamsx.topology.topology"],envversion:51,filenames:["index.rst","modules.rst","streamsx.rst","streamsx.ec.rst","streamsx.rest.rst","streamsx.rest_errors.rst","streamsx.rest_primitives.rst","streamsx.spl.rst","streamsx.spl.op.rst","streamsx.spl.spl.rst","streamsx.spl.toolkit.rst","streamsx.spl.types.rst","streamsx.topology.rst","streamsx.topology.context.rst","streamsx.topology.mqtt.rst","streamsx.topology.schema.rst","streamsx.topology.tester.rst","streamsx.topology.topology.rst"],objects:{"":{streamsx:[2,0,0,"-"]},"streamsx.ec":{CustomMetric:[3,1,1,""],MetricKind:[3,1,1,""],channel:[3,3,1,""],domain_id:[3,3,1,""],get_application_configuration:[3,3,1,""],instance_id:[3,3,1,""],is_standalone:[3,3,1,""],job_id:[3,3,1,""],local_channel:[3,3,1,""],local_max_channels:[3,3,1,""],max_channels:[3,3,1,""],pe_id:[3,3,1,""]},"streamsx.ec.CustomMetric":{value:[3,2,1,""]},"streamsx.ec.MetricKind":{Counter:[3,2,1,""],Gauge:[3,2,1,""],Time:[3,2,1,""]},"streamsx.rest":{StreamingAnalyticsConnection:[4,1,1,""],StreamsConnection:[4,1,1,""]},"streamsx.rest.StreamingAnalyticsConnection":{get_domain:[4,4,1,""],get_domains:[4,4,1,""],get_installations:[4,4,1,""],get_instance:[4,4,1,""],get_instances:[4,4,1,""],get_resources:[4,4,1,""],get_streaming_analytics:[4,4,1,""],resource_url:[4,2,1,""]},"streamsx.rest.StreamsConnection":{get_domain:[4,4,1,""],get_domains:[4,4,1,""],get_installations:[4,4,1,""],get_instance:[4,4,1,""],get_instances:[4,4,1,""],get_resources:[4,4,1,""],resource_url:[4,2,1,""],session:[4,2,1,""]},"streamsx.rest_errors":{ViewNotFoundError:[5,5,1,""]},"streamsx.rest_errors.ViewNotFoundError":{args:[5,2,1,""],with_traceback:[5,4,1,""]},"streamsx.rest_primitives":{ActiveService:[6,1,1,""],ActiveVersion:[6,1,1,""],Domain:[6,1,1,""],ExportedStream:[6,1,1,""],Host:[6,1,1,""],ImportedStream:[6,1,1,""],Installation:[6,1,1,""],Instance:[6,1,1,""],Job:[6,1,1,""],Metric:[6,1,1,""],Operator:[6,1,1,""],OperatorConnection:[6,1,1,""],OperatorOutputPort:[6,1,1,""],PE:[6,1,1,""],PEConnection:[6,1,1,""],PublishedTopic:[6,1,1,""],Resource:[6,1,1,""],ResourceAllocation:[6,1,1,""],ResourceTag:[6,1,1,""],StreamingAnalyticsService:[6,1,1,""],View:[6,1,1,""],ViewItem:[6,1,1,""],get_view_obj:[6,3,1,""]},"streamsx.rest_primitives.ActiveService":{leader:[6,2,1,""],processId:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],startTime:[6,2,1,""],status:[6,2,1,""],type:[6,2,1,""]},"streamsx.rest_primitives.ActiveVersion":{architecture:[6,2,1,""],build_version:[6,2,1,""],edition_name:[6,2,1,""],full_product_version:[6,2,1,""],minimum_os_base_version:[6,2,1,""],minimum_os_patch_version:[6,2,1,""],product_name:[6,2,1,""],product_version:[6,2,1,""]},"streamsx.rest_primitives.Domain":{creationTime:[6,2,1,""],creationuser:[6,2,1,""],get_active_services:[6,4,1,""],get_hosts:[6,4,1,""],get_instances:[6,4,1,""],get_resource_allocations:[6,4,1,""],get_resources:[6,4,1,""],id:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.ExportedStream":{get_operator_output_port:[6,4,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.Host":{ipAddress:[6,2,1,""],name:[6,2,1,""],processorCount:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],restrictedTags:[6,2,1,""],services:[6,2,1,""],status:[6,2,1,""],tag:[6,2,1,""]},"streamsx.rest_primitives.ImportedStream":{refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.Installation":{architecture:[6,2,1,""],buildVersion:[6,2,1,""],editionName:[6,2,1,""],fullProductVersion:[6,2,1,""],minimumOSBaseVersion:[6,2,1,""],minimumOSPatchVersion:[6,2,1,""],productName:[6,2,1,""],productVersion:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.Instance":{creationTime:[6,2,1,""],creationuser:[6,2,1,""],get_active_services:[6,4,1,""],get_domain:[6,4,1,""],get_exported_streams:[6,4,1,""],get_hosts:[6,4,1,""],get_imported_streams:[6,4,1,""],get_job:[6,4,1,""],get_jobs:[6,4,1,""],get_operator_connections:[6,4,1,""],get_operators:[6,4,1,""],get_pe_connections:[6,4,1,""],get_pes:[6,4,1,""],get_published_topics:[6,4,1,""],get_resource_allocations:[6,4,1,""],get_views:[6,4,1,""],health:[6,2,1,""],id:[6,2,1,""],owner:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],startTime:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.Job":{applicationName:[6,2,1,""],cancel:[6,4,1,""],get_domain:[6,4,1,""],get_hosts:[6,4,1,""],get_instance:[6,4,1,""],get_operator_connections:[6,4,1,""],get_operators:[6,4,1,""],get_pe_connections:[6,4,1,""],get_pes:[6,4,1,""],get_resource_allocations:[6,4,1,""],get_views:[6,4,1,""],health:[6,2,1,""],id:[6,2,1,""],jobGroup:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],startedBy:[6,2,1,""],status:[6,2,1,""],submitTime:[6,2,1,""]},"streamsx.rest_primitives.Metric":{description:[6,2,1,""],lastTimeRetrieved:[6,2,1,""],metricKind:[6,2,1,""],metricType:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],value:[6,2,1,""]},"streamsx.rest_primitives.Operator":{get_metrics:[6,4,1,""],indexWithinJob:[6,2,1,""],name:[6,2,1,""],operatorKind:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.OperatorConnection":{id:[6,2,1,""],refresh:[6,4,1,""],required:[6,2,1,""],resourceType:[6,2,1,""]},"streamsx.rest_primitives.OperatorOutputPort":{indexWithinOperator:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],streamName:[6,2,1,""]},"streamsx.rest_primitives.PE":{health:[6,2,1,""],id:[6,2,1,""],indexWithinJob:[6,2,1,""],launchCount:[6,2,1,""],optionalConnections:[6,2,1,""],pendingTracingLevel:[6,2,1,""],processId:[6,2,1,""],refresh:[6,4,1,""],relocatable:[6,2,1,""],requiredConnections:[6,2,1,""],resourceType:[6,2,1,""],restartable:[6,2,1,""],status:[6,2,1,""],statusReason:[6,2,1,""],tracingLevel:[6,2,1,""]},"streamsx.rest_primitives.PEConnection":{id:[6,2,1,""],refresh:[6,4,1,""],required:[6,2,1,""],resourceType:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.PublishedTopic":{schema:[6,2,1,""],topic:[6,2,1,""]},"streamsx.rest_primitives.Resource":{get_resource:[6,4,1,""],name:[6,2,1,""],refresh:[6,4,1,""]},"streamsx.rest_primitives.ResourceAllocation":{applicationResource:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],schedulerStatus:[6,2,1,""],status:[6,2,1,""]},"streamsx.rest_primitives.ResourceTag":{definition_format_properties:[6,2,1,""],description:[6,2,1,""],name:[6,2,1,""],properties_definition:[6,2,1,""],reserved:[6,2,1,""]},"streamsx.rest_primitives.StreamingAnalyticsService":{cancel_job:[6,4,1,""],get_instance_status:[6,4,1,""],start_instance:[6,4,1,""],stop_instance:[6,4,1,""]},"streamsx.rest_primitives.View":{activateOption:[6,2,1,""],bufferCapacitySeconds:[6,2,1,""],bufferCapacityTuples:[6,2,1,""],bufferCapacityUnits:[6,2,1,""],description:[6,2,1,""],get_domain:[6,4,1,""],get_instance:[6,4,1,""],get_job:[6,4,1,""],get_view_items:[6,4,1,""],id:[6,2,1,""],logicalOperatorName:[6,2,1,""],maximumTupleRate:[6,2,1,""],name:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""],start_data_fetch:[6,4,1,""],stop_data_fetch:[6,4,1,""]},"streamsx.rest_primitives.ViewItem":{collectionTime:[6,2,1,""],data:[6,2,1,""],refresh:[6,4,1,""],resourceType:[6,2,1,""]},"streamsx.spl":{op:[8,0,0,"-"],spl:[9,0,0,"-"],toolkit:[10,0,0,"-"],types:[11,0,0,"-"]},"streamsx.spl.op":{Expression:[8,1,1,""],Invoke:[8,1,1,""],Map:[8,1,1,""],Sink:[8,1,1,""],Source:[8,1,1,""]},"streamsx.spl.op.Expression":{expression:[8,6,1,""],spl_json:[8,4,1,""]},"streamsx.spl.op.Invoke":{attribute:[8,4,1,""],expression:[8,4,1,""],output:[8,4,1,""],params:[8,2,1,""]},"streamsx.spl.op.Map":{attribute:[8,4,1,""],expression:[8,4,1,""],output:[8,4,1,""],params:[8,2,1,""],stream:[8,2,1,""]},"streamsx.spl.op.Sink":{attribute:[8,4,1,""],expression:[8,4,1,""],output:[8,4,1,""],params:[8,2,1,""]},"streamsx.spl.op.Source":{attribute:[8,4,1,""],expression:[8,4,1,""],output:[8,4,1,""],params:[8,2,1,""],stream:[8,2,1,""]},"streamsx.spl.spl":{filter:[9,1,1,""],for_each:[9,1,1,""],ignore:[9,3,1,""],map:[9,1,1,""],pipe:[9,3,1,""],sink:[9,3,1,""],source:[9,1,1,""]},"streamsx.spl.toolkit":{add_toolkit:[10,3,1,""]},"streamsx.spl.types":{Timestamp:[11,1,1,""],float32:[11,3,1,""],float64:[11,3,1,""],int16:[11,3,1,""],int32:[11,3,1,""],int64:[11,3,1,""],int8:[11,3,1,""],rstring:[11,3,1,""],uint16:[11,3,1,""],uint32:[11,3,1,""],uint64:[11,3,1,""],uint8:[11,3,1,""]},"streamsx.spl.types.Timestamp":{datetime:[11,4,1,""],from_datetime:[11,6,1,""],machine_id:[11,2,1,""],nanoseconds:[11,2,1,""],seconds:[11,2,1,""],time:[11,4,1,""],tuple:[11,4,1,""]},"streamsx.topology":{context:[13,0,0,"-"],mqtt:[14,0,0,"-"],schema:[15,0,0,"-"],tester:[16,0,0,"-"],topology:[17,0,0,"-"]},"streamsx.topology.context":{ConfigParams:[13,1,1,""],ContextTypes:[13,1,1,""],JobConfig:[13,1,1,""],SubmissionResult:[13,1,1,""],submit:[13,3,1,""]},"streamsx.topology.context.ConfigParams":{FORCE_REMOTE_BUILD:[13,2,1,""],JOB_CONFIG:[13,2,1,""],SERVICE_NAME:[13,2,1,""],STREAMS_CONNECTION:[13,2,1,""],VCAP_SERVICES:[13,2,1,""]},"streamsx.topology.context.ContextTypes":{ANALYTICS_SERVICE:[13,2,1,""],BUILD_ARCHIVE:[13,2,1,""],BUNDLE:[13,2,1,""],DISTRIBUTED:[13,2,1,""],STANDALONE:[13,2,1,""],STANDALONE_BUNDLE:[13,2,1,""],STREAMING_ANALYTICS_SERVICE:[13,2,1,""],TOOLKIT:[13,2,1,""]},"streamsx.topology.context.JobConfig":{add:[13,4,1,""],target_pe_count:[13,2,1,""],tracing:[13,2,1,""]},"streamsx.topology.context.SubmissionResult":{job:[13,2,1,""]},"streamsx.topology.mqtt":{MqttStreams:[14,1,1,""]},"streamsx.topology.mqtt.MqttStreams":{publish:[14,4,1,""],subscribe:[14,4,1,""]},"streamsx.topology.schema":{CommonSchema:[15,1,1,""],StreamSchema:[15,1,1,""]},"streamsx.topology.schema.CommonSchema":{Binary:[15,2,1,""],Json:[15,2,1,""],Python:[15,2,1,""],String:[15,2,1,""],XML:[15,2,1,""]},"streamsx.topology.schema.StreamSchema":{extend:[15,4,1,""],schema:[15,4,1,""],spl_json:[15,4,1,""]},"streamsx.topology.tester":{Condition:[16,1,1,""],Tester:[16,1,1,""]},"streamsx.topology.tester.Condition":{fail:[16,4,1,""],valid:[16,2,1,""]},"streamsx.topology.tester.Tester":{add_condition:[16,4,1,""],contents:[16,4,1,""],local_check:[16,4,1,""],setup_distributed:[16,6,1,""],setup_standalone:[16,6,1,""],setup_streaming_analytics:[16,6,1,""],streams_connection:[16,2,1,""],submission_result:[16,2,1,""],test:[16,4,1,""],tuple_check:[16,4,1,""],tuple_count:[16,4,1,""]},"streamsx.topology.topology":{PendingStream:[17,1,1,""],Routing:[17,1,1,""],Stream:[17,1,1,""],Topology:[17,1,1,""],View:[17,1,1,""]},"streamsx.topology.topology.PendingStream":{complete:[17,4,1,""],is_complete:[17,4,1,""]},"streamsx.topology.topology.Routing":{HASH_PARTITIONED:[17,2,1,""],KEY_PARTITIONED:[17,2,1,""],ROUND_ROBIN:[17,2,1,""]},"streamsx.topology.topology.Stream":{as_string:[17,4,1,""],autonomous:[17,4,1,""],end_low_latency:[17,4,1,""],end_parallel:[17,4,1,""],filter:[17,4,1,""],flat_map:[17,4,1,""],for_each:[17,4,1,""],isolate:[17,4,1,""],low_latency:[17,4,1,""],map:[17,4,1,""],multi_transform:[17,4,1,""],name:[17,2,1,""],parallel:[17,4,1,""],print:[17,4,1,""],publish:[17,4,1,""],sink:[17,4,1,""],transform:[17,4,1,""],union:[17,4,1,""],view:[17,4,1,""]},"streamsx.topology.topology.Topology":{name:[17,2,1,""],namespace:[17,2,1,""],source:[17,4,1,""],subscribe:[17,4,1,""]},"streamsx.topology.topology.View":{initialize_rest:[17,4,1,""],start_data_fetch:[17,4,1,""],stop_data_fetch:[17,4,1,""]},streamsx:{ec:[3,0,0,"-"],rest:[4,0,0,"-"],rest_errors:[5,0,0,"-"],rest_primitives:[6,0,0,"-"],spl:[7,0,0,"-"],topology:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method","5":"py:exception","6":"py:staticmethod"},terms:{"abstract":17,"boolean":[3,9,14],"break":9,"byte":[15,17],"case":[8,9,16,17],"class":[0,2,3,4,6,7,8,11,13,14,15,16,17],"default":[9,13,14,16,17],"enum":[3,15,17],"export":6,"final":9,"float":11,"function":[1,3,4,7,13,17],"import":[6,9,16,17],"int":[3,6,11,14,16,17],"long":[6,14],"new":[13,17],"public":14,"return":[3,4,5,6,9,11,13,16,17],"static":[8,11,16],"true":[3,4,6,9,13,14,16,17],"while":16,For:[0,2,4,6,8,9,13,16,17],Has:17,Not:17,One:17,PEs:[3,4,6,13],The:[0,2,3,4,6,8,9,11,13,14,16,17],There:4,These:[9,13],Use:[9,13,15,17],Used:[13,16],Using:17,With:[3,12,17],__call__:[3,9],__dict__:3,__enter__:[3,9,17],__exit__:[3,9,17],__getattr__:13,__getstate__:3,__init__:[3,9,17],__iter__:9,__setstate__:3,__traceback__:5,_resourceel:6,_type:8,_valu:8,_view:6,abl:[9,13],about:6,abov:9,access:[0,2,3,4,6,13,14,17],across:[3,4,9,12,13,16,17],act:16,action:14,activ:6,activateopt:6,activeservic:6,activevers:6,adapt:17,add:[10,13,16],add_condit:16,add_toolkit:10,added:[9,14,16],adding:17,addit:[6,8,9,13,14,16,17],address:6,addtion:4,advanc:[12,17],advantag:[0,2,9,17],after:[9,13,16,17],against:[9,13,16,17],all:[4,6,9,13,15,16,17],alloc:6,allow:[0,2,4,6,8,9,12,13,14,15,16,17],also:[0,2,9,16,17],altern:17,alwai:[9,17],anaconda:[0,2,17],analyt:[1,3,6,12,13,16,17],analytics_servic:13,analyz:[12,17],ananconda:[0,2],ani:[0,2,3,6,7,9,11,14,16,17],anoth:[9,15,17],api:[1,3,12,13,16,17],appli:14,applic:[1,3,4,6,8,11,12,13,14,15,16,17],applicationnam:6,applicationresourc:6,approach:6,arbitrari:[8,9,16],architectur:[6,13],archiv:13,aren:17,arg:[5,9],argument:[9,17],around:4,arriv:[9,12,17],artifact:13,as_str:17,ascii:9,assert:16,assert_on_fail:16,assertequ:16,assetionerror:16,assign:[6,9,13,16,17],associ:[6,9,13,16,17],assum:4,attempt:14,attr:9,attribthreshold:9,attribut:[2,6,7,8,16,17],authent:14,author:4,automat:[6,14],autonom:17,avail:[0,2,3,4,13,14,17],back:[13,17],backward:9,base:[3,4,5,6,8,9,11,13,14,15,16,17],batteri:9,beacon:8,becam:16,becaus:6,becom:[7,9,16],been:[3,6,13,14,17],befor:[13,14,16,17],behavior:[3,16,17],being:[0,2,3,9,12,14,16,17],belong:6,between:[3,6,15,17],beyond:9,binari:[15,17],bit:3,blob:17,block:14,bluemix:[0,2,3,4,6,12,13,16,17],bool:[6,13,16,17],both:[9,17],bound:[4,9],boundari:17,bring:8,brittl:9,broker:14,buffer:[6,14,17],buffer_tim:17,buffercapacitysecond:6,buffercapacitytupl:6,buffercapacityunit:6,build:[0,2,6,12,13,17],build_arch:13,build_vers:6,buildvers:6,built:[0,2,13,16,17],bundl:[13,17],call:[4,7,9,13,16,17],callabl:[2,7,9,12,16],can:[0,2,4,6,9,12,13,15,16,17],cancel:[6,16],cancel_job:6,cannot:[5,6,17],capac:6,caus:[14,16],cento:13,certif:14,cfg:13,chang:[6,9,17],channel:[3,17],check:16,checker:16,checkpoint:[9,17],client:[14,17],clientid:14,clock:11,close:9,cloud:[0,2,3,6,12,13,16,17],cluster:[0,2,13],code:[0,2,3,9,13,16,17],collect:[6,8],collectiontim:6,combin:16,command:13,commandtimeout:14,common:[8,11,15],commonschema:[15,17],compat:[9,16,17],compil:[9,13,17],complet:[3,9,13,14,16,17],compon:11,composit:17,comput:[12,17],condit:16,config:[13,14,16],configparam:13,configur:[0,2,3,4,6,13,14,16],connect:[3,4,6,8,13,14,15,16,17],connector:14,consist:[6,17],consol:[0,2,13,17],constain:15,constant:13,constraint:8,constructor:9,consum:[9,17],contain:[3,4,6,9,13,14,15,16,17],content:[0,1,4,6,9,16,17],context:[1,2,9,12,16,17],contexttyp:13,continu:[3,17],continuum:[0,2],control:13,conveni:13,convers:9,convert:[9,11,14,15,17],coordin:3,copi:[3,9,17],correct:4,correctli:16,correl:[12,17],correspond:[3,11],could:4,count:[3,13,16],count_:3,counter:[3,6],creat:[3,4,6,7,9,11,13,14,16,17],creation:[12,13,16,17],creationtim:6,creationus:6,credenti:[3,6,13],critic:13,cross:17,ctxtype:[13,16],current:[3,4,6,13,16,17],custom:[3,6,9,17],custommetr:[3,17],data:[3,6,8,12,13,16,17],data_directori:13,databas:3,datetim:[11,17],debug:[6,13],declar:[8,16,17],decor:[3,7,9],decorati:9,deep:17,deepcopi:17,def:[3,9,16,17],defin:[6,9,11,13,14,16,17],definit:[0,2,6,9,11],definition_format_properti:6,degre:17,del:3,denot:17,depend:9,deprec:13,deriv:9,dervi:[9,17],describ:6,descript:[3,6,17],design:[6,16],detail:[0,2,13],detect:[11,14],determin:[6,13,17],determinist:17,develop:[12,13,17],devlop:13,diagnos:13,dict:[3,6,13,17],dictionari:[2,3,7,13,17],differ:[6,9,11,15,17],digit:9,directli:16,directori:[10,13,14],disabl:[4,14],disadvantag:9,discard:9,disconnect:[6,17],distribut:[0,1,2,4,12,13,16,17],doc:[9,17],docpi:9,docstr:9,document:[4,15],doe:[3,9,17],domain:[0,2,4,6,13,16],domain_id:3,dot:13,download:[0,2],downstream:17,drop:17,due:[3,17],dump:[15,17],durat:3,dure:[13,16],dynam:16,each:[3,6,9,13,14,15,16,17],echo:17,edit:6,edition_nam:6,editionnam:6,effect:[9,16,17],either:[14,17],element:[3,5,6,9,13,16,17],embed:[0,2,13],empti:[8,9,17],enabl:[0,2,4,14],encrypt:14,end:17,end_low_lat:17,end_parallel:17,enforc:11,ensur:[9,16,17],ensure_ascii:17,entri:[4,16],enumer:3,environ:[0,2,4,13,16],epoch:[3,6,11],equal:9,equival:[9,17],error:[6,9,13,16],evalu:[9,16,17],even:[13,17],event:[12,17],everi:[0,2,17],eviron:17,exact:16,exactli:16,exampl:[3,4,6,8,9,13,16,17],exc_tb:3,exc_typ:[3,9,17],exc_val:3,exc_valu:[9,17],excel:17,except:[5,16],exclud:17,exclude_packag:17,exec:3,execut:[0,1,2,9,12,13,16,17],exist:[3,4,9,13,16],exlud:9,exop:8,expand:[0,2],expect:[9,16],explictli:9,exportedstream:6,expos:[3,4,6],express:[6,8,17],extend:[4,15],extens:17,extensionoper:8,extent:9,extern:[3,8,17],extract:9,fail:[6,16],failur:[6,14,16],fals:[3,4,6,13,14,16,17],fed:17,feedback:17,fetch:6,field:9,file:[9,13,14,17],filenam:4,filter:[3,8,9,16,17],finit:[13,17],first:[9,14,16,17],fix:[6,17],flag:13,flat_map:17,flattern:17,flexibl:9,float32:[9,11],float64:[9,11,17],flow:17,flush:[9,17],follow:[9,14,16,17],fom:9,foobar:14,for_each:[9,17],forc:[6,13],force_remote_build:[13,16],forcefulli:6,forceremotebuild:13,form:[9,14],formal:9,format:[4,13,15],fourth:9,fragment:16,from:[0,2,3,4,6,7,11,12,13,14,16,17],from_datetim:11,full:[6,14],full_product_vers:6,fullproductvers:6,func:17,further:4,futur:[9,16,17],gaug:[3,6],gener:[9,13,14,17],get:[3,6,11],get_active_servic:6,get_application_configur:3,get_domain:[4,6],get_exported_stream:6,get_host:6,get_imported_stream:6,get_inst:[4,6],get_instal:4,get_instance_statu:[4,6],get_job:[4,6],get_metr:6,get_oper:6,get_operator_connect:6,get_operator_output_port:6,get_p:6,get_pe_connect:6,get_published_top:6,get_resourc:[4,6],get_resource_alloc:6,get_streaming_analyt:4,get_view:6,get_view_item:6,get_view_obj:6,getter:9,github:14,given:6,global:3,granular:6,graph:[13,16,17],greater:16,group:[6,13],guarante:17,handl:[9,12,14,17],hardwar:6,has:[0,2,3,4,6,8,9,13,16,17],hash:17,hash_partit:17,hasn:14,have:[6,8,9,13,14,16,17],health:[6,16],healthi:[6,16],hello:[16,17],here:16,high:[12,17],hint:13,hoc:3,hold:3,host:[0,2,3,6,12,13,17],hostid:14,hot:6,how:[8,9,13,17],howev:9,html:[9,17],http:[0,2,4,9,14,17],ibm:[1,3,4,6,12,13,16,17],ibmstream:14,ident:[8,11],identif:9,identifi:[3,4,6,9,11,13,14,16],ignor:[9,13,17],immedi:17,immut:17,implement:[0,2,6,9,15,16,17],implicitli:9,importedstream:6,impos:3,improv:13,includ:[0,2,4,6,9,10,12,13,16,17],include_packag:17,increas:9,indefinit:14,independ:[6,9,17],index:[0,6,9],indexwithinjob:6,indexwithinoper:6,indic:[3,6,14],infinit:[13,17],info:13,inform:[3,4,6,12,13,14,17],ingest:[12,17],initi:[2,3,7,12],initialize_rest:17,initialvalu:3,input:[8,9,13,16,17],insert:16,instal:[0,2,4,6,13,16,17],instanc:[0,2,3,4,6,8,9,13,16,17],instance_id:3,insuffici:9,int16:11,int32:[9,11,17],int64:11,int8:11,integ:[3,14,17],intend:[13,16],interact:[0,2,4,16],interchang:15,interestingsensor:9,intermedi:13,intern:14,interoper:15,introduc:17,invoc:[8,9,17],invok:[3,8,9,11,17],ipaddress:6,is_complet:17,is_standalon:3,isol:[13,16,17],issu:13,item:[4,8,17],iter:[9,17],its:[3,4,6,9,16,17],jan:11,januari:3,java:6,jmx:13,job:[3,4,6,13,16,17],job_config:13,job_group:13,job_id:[3,6],job_nam:[6,13],jobconfig:13,jobconfigoverlai:13,jobgroup:6,jobs_count:4,json:[4,6,13,15,17],json_active_vers:6,json_rep:6,json_resource_tag:6,json_view:6,keelaliveinterv:14,keep:17,keepal:14,keepaliveinterv:14,kei:[3,9,13,14],key_partit:17,keystor:14,keystorepassword:14,keyword:9,keyword_onli:9,kind:[3,6,8,9],known:4,kwarg:9,lambda:[16,17],languag:[0,2,6,15,17],last:14,lasttimeretriev:6,later:[3,13,16],latest:6,launchcount:6,leader:6,least:[9,16],len:4,less:9,letter:9,level:[13,17],librari:[0,2,9,17],lifetim:9,like:[7,9],line:13,linux:3,list:[2,4,6,7,8,16,17],load:17,local:[3,13,16],local_channel:3,local_check:16,local_max_channel:3,localdomain:4,localhost:14,locat:[3,5,10,13],log:13,logic:[6,17],logicaloperatornam:6,longer:[14,17],loop:17,lost:11,low_lat:17,machin:[11,12,17],machine_id:11,made:[16,17],mai:[0,2,3,6,7,9,11,13,14,16,17],main:13,maintain:[4,9,17],make:[4,9,16],manag:[0,2,4,9,17],mandatori:9,mani:8,manual:[4,6],map:[8,9,13,14,16,17],mark:[9,16],match:[4,6,9,16,17],max_channel:3,maximum:[3,6,14],maximumtupler:6,mean:9,measur:[6,17],merg:17,messag:[12,14,17],messagequeues:14,met:16,metadata:6,method:[4,6,9,13,16,17],metric:[3,6,17],metrickind:[3,6],metrictyp:6,microservic:6,microsoft:17,middl:9,million:[12,17],millisecond:[3,14],minimum:6,minimum_os_base_vers:6,minimum_os_patch_vers:6,minimumosbasevers:6,minimumospatchvers:6,mitig:9,mix:9,mode:[3,13,16],model:[9,16,17],modif:[0,2],modifi:[6,16,17],modul:[0,1],monitor:[3,16],more:[3,6,9,17],most:[3,6],mqs:14,mqstream:14,mqtt:[2,12],mqtt_publish:14,mqtt_stream:14,mqttstream:14,multi_transform:17,multipl:[4,6,12,13,17],must:[0,2,3,6,8,9,11,13,16,17],my_metr:3,myf:3,myfunc:9,naiv:11,name:[2,3,4,6,7,8,13,16,17],namespac:17,nanosecond:11,natur:15,necessari:17,need:[3,4,9,13,14],negative_metr:17,negativesenti:17,nest:[3,17],never:[16,17],newsingest:13,non:[9,17],none:[2,3,4,6,7,8,13,16,17],nor:17,normal:16,notat:13,note:[9,13],noth:9,notset:13,now:17,number:[0,2,3,6,8,9,13,14,16,17],obj:[3,15],object:[0,2,3,4,6,8,9,11,13,14,15,16,17],observ:3,obtain:[4,9,17],occur:[6,13,17],occurr:3,off:6,omit:16,onc:[7,9,16,17],one:[3,6,8,9,16,17],onli:[3,6,9,13,14,15,16,17],onnect:14,onto:13,open:[9,17],oper:[1,3,4,6,7,8,11,12,13,16],operatorconnect:6,operatorkind:6,operatoroutputport:6,oport:17,optim:17,option:[0,2,4,6,9,13,14,17],optionalconnect:6,order:[9,16,17],org:[9,14,17],other:[3,6,7,9,13,15,17],otherwis:[6,8,9,14,16,17],out:[9,17],output:[6,8,9,17],outsid:[3,4],outut:[8,9],over:17,overrid:13,overview:[1,2,4,7],own:[6,17],owner:6,packag:[0,17],page:0,parallel:[3,17],param:[8,9,11],paramet:[3,4,6,8,9,10,11,13,16,17],part:[7,9],parti:17,partiallyconnect:6,partiallyhealthi:6,partiallyunhealthi:6,particular:14,partit:13,pass:[2,3,7,13,16,17],passw0rd:4,password:[4,13,14,16],patch:6,path:[0,2,13,14],path_to_python_instal:[0,2],pathnam:14,pe_id:3,peconnect:6,pend:[6,17],pending_sourc:17,pendingstream:17,pendingtracinglevel:6,per:[6,12,17],perform:[13,16,17],period:14,permiss:13,pes:6,pickl:[9,17],picklabl:17,ping:14,pipe:9,pipelin:17,place:8,placehold:17,plan:4,platform:[0,2,3,6,12,13,16,17],point:[3,4,17],port:[3,6,8,9,14,17],posit:[2,7],positional_or_keyword:9,positive_metr:17,positivesenti:17,posix:11,possibl:6,potenti:[8,17],pre:[0,2,17],preced:17,preload:13,premis:[1,12,17],present:[6,16,17],pressur:9,prevent:17,primari:17,primit:[0,2,6,7,9,17],print:[4,6,9,14,17],printtupl:9,prior:14,privat:[9,14],process:[0,2,3,6,7,12,13,14,16],processid:6,processor:6,processorcount:6,produc:[8,9,13,17],product:6,product_nam:6,product_vers:6,productnam:6,productvers:6,program:[15,17],programmat:4,properti:[3,6,13,14],properties_definit:6,provid:[3,4,6,7,9,13,17],pub_stream:14,publish:[6,14,15,17],publishedtop:6,punctuat:9,purpos:9,python:[1,3,4,6,7,12,13,14,15,16,17],pythonhom:[0,2],pyword:17,qos:14,qualiti:14,queue:6,quickli:[12,17],rais:[3,4,5,6,16,17],rand:16,random:[16,17],rang:[3,9],rate:[12,17],rather:17,read:[9,13,17],readabl:9,real:[12,17],receiv:[14,16,17],recent:6,recommend:[3,6],reconnect:14,reconnectionbound:14,redhat:13,reduct:9,refer:[4,17],reflect:6,refresh:6,regard:4,regardless:[6,15,16,17],region:[3,9,17],regular:6,rel:14,relat:8,reli:17,reloc:[6,13],relocat:6,remain:[9,16],remot:[13,17],remov:[3,6],repeat:17,replic:3,repres:[3,6,9,13,17],represent:[9,13,17],request:4,requir:[3,6,9,11,13,14,16,17],requiredconnect:6,reserv:[6,9],resolut:11,resourc:[3,4,5,6,12,13,17],resource_url:4,resourcealloc:6,resourcetag:6,resourcetyp:6,respons:[6,11],rest:[1,6,13,16,17],rest_client:6,rest_error:[1,2],rest_primit:[1,2],restart:[6,9,13,16,17],restrictedtag:6,result:[9,13,16,17],retain:[14,17],retriev:[4,6,17],reus:17,robust:9,root:4,round_robin:17,rout:17,rstring:[9,11],run:[0,2,3,4,6,9,13,16,17],runnabl:17,runtim:[0,2,9,13,16,17],sab:[13,17],salt:17,same:[3,11,13,17],sampl:[14,17],sample_s:17,save:3,scalabl:[12,17],schedul:[6,13],schedulerstatu:6,schema:[2,6,8,9,12,17],scheme:9,score:16,search:0,second:[6,9,11,12,14,17],section:[0,2],secur:3,see:[0,2,9,13,17],seen:[16,17],select:[2,7,13],self:[3,5,9,11,13,16,17],semant:[2,3,12],send:[8,17],sensor:[9,17],sent:[14,17],sentiment:[9,17],separ:[13,17],seq:9,sequenc:[9,15,16,17],seri:17,server:[6,14],serveruri:14,servic:[1,3,4,6,12,13,14,16,17],service_nam:[4,13,16],session:4,set:[0,2,3,5,6,8,9,11,13,16,17],setproperti:[0,2],setup:[1,16],setup_distribut:16,setup_standalon:16,setup_streaming_analyt:16,share:[0,2],should:[9,14,16,17],show:9,shutdown:[2,7,12],side:16,sign:3,signatur:9,similar:9,simpl:[3,8,14,16,17],simpli:[0,2],sinc:[11,13,17],singl:[3,6,8,9,14,17],sink:[8,9,17],situat:17,size:[6,14,17],skip:16,some:[6,9,17],sound:17,sourc:[0,2,8,9,12,13,14,16,17],spars:9,specif:[0,2,4,6,13,14,17],specifi:[4,6,9,13,14,16,17],spl:[1,3,6,12,13,15],spl_json:[8,15],spldoc:9,sploper:8,spp:9,src:14,ssl:[4,14],standalon:[1,2,13,16,17],standalone_bundl:13,standard:[0,2,3,4,9],standbi:6,start:[4,6,9,17],start_data_fetch:[6,17],start_inst:6,startedbi:6,startswith:17,starttim:6,state:[2,3,4,7,12,14],stateless:9,statu:[4,6,16],statusreason:6,stdout:17,steam:16,step:17,stop:[4,6,9,16,17],stop_data_fetch:[6,17],stop_inst:6,store:[3,6,11],str:[3,4,6,8,10,13,15,16,17],stream:[1,3,6,8,9,12,13,14,15,16],streaming_analyt:16,streaming_analytics_servic:[13,16],streaming_analytics_service_nam:[4,16],streaminganalyticsconnect:[4,6],streaminganalyticsservic:[4,6],streamnam:6,streams_connect:[13,16],streams_domain_id:[13,16],streams_instal:[13,16],streams_instance_id:[13,16],streams_zkconnect:[13,16],streamsadmin:4,streamschema:[15,17],streamsconnect:[4,13,16],streamset:17,streamsqs:4,streamsx:[0,1],streamtool:[0,2,13],streasm:13,strictli:11,string:[3,4,13,14,15,16,17],structur:17,style:[2,7],sub:[13,16,17],subclass:16,submis:13,submiss:[2,7,13,16,17],submission_result:16,submissionresult:13,submit:[0,2,3,6,9,13,16,17],submitjob:13,submittim:6,submodul:1,subpackag:1,subscrib:[6,14,15,17],subsequ:[13,14,16,17],subset:9,substr:3,suffix:14,suitabl:9,summar:6,supersed:13,suppli:[3,6,13,17],support:[2,3,8,9,13,15,16,17],suppress:9,synonym:13,system:[3,6,8,13,17],tag:[6,13],take:[9,16,17],target:13,target_pe_count:13,tcp:14,techniqu:17,temp:9,term:[9,17],termin:17,test:[3,13,16],test_config:16,test_ctxtyp:16,test_filt:16,test_funct:14,test_job_is_healthi:16,test_mqttpublishcli:14,testcas:16,tester:[2,12],testfiltermap:16,testlocalcheckexampl:16,testsimplefilt:16,than:[9,16,17],thei:[9,17],thi:[0,2,3,4,6,8,9,11,12,13,16,17],third:17,those:[8,13,17],though:9,thought:17,thousand:[12,17],thread:[6,17],threshold:9,through:[0,2,3,4,16,17],throughput:[12,17],thu:[4,9,11,16,17],thursdai:3,time:[3,6,9,11,12,13,14,16,17],timeout:14,timestamp:11,tmp:14,tool:3,toolkit:[2,7,9,13,17],top:17,topic1:14,topic:[6,14,17],topo:[13,14],topolog:[0,1,2,3,8,10],trace:[6,13],traceback:[9,17],tracinglevel:6,track:17,traffic:17,transform:17,translat:13,trust:14,truststor:14,truststorepassword:14,tupl:[0,2,3,6,7,8,11,12,13,14,15,16],tuple_check:16,tuple_count:16,turn:[0,2],tweet:13,two:[6,8,9,11,16,17],type:[2,3,4,6,7,13,16,17],typeerror:17,typic:[3,8,9,13,16,17],uint16:11,uint32:11,uint64:11,uint8:11,undefin:17,under:16,underscor:9,unhealthi:6,unicod:17,union:17,uniqu:[6,13,14,16,17],unit:3,unittest:16,univers:3,unix:11,unknown:6,unless:[9,14,16],unpredict:17,until:[16,17],unwant:17,updat:[3,6,17],upon:[9,16,17],upstream:17,uri:14,url:[3,4],usag:11,use:[0,2,3,4,9,11,13,14,16,17],used:[0,2,3,6,7,9,11,13,14,15,16,17],useful:9,user1id:14,user1passwrd:14,user:[4,6,12,13,17],userid:14,usernam:[4,13,16],uses:[4,14,16,17],using:[0,2,3,4,9,11,12,13,15,16,17],utc:[3,11],utcfromtimestamp:11,util:8,valid:[9,16],valu:[3,4,6,8,9,11,13,14,16,17],valueerror:[3,4,6],var_keyword:9,var_posit:9,variabl:[0,2,3,4,13,16,17],variat:11,varieti:9,vcap:[4,13,16],vcap_servic:[4,13,16],veri:[12,17],verif:4,verifi:[4,16],version:[6,13,17],view:[0,2,4,5,6,13,17],viewitem:6,viewnotfounderror:5,visibl:17,voltag:9,wait:14,warn:13,were:11,what:[9,13,17],when:[0,2,3,5,6,8,9,11,13,14,16,17],where:[3,6,8,9,15,17],whether:[6,13],which:[4,6,8,13,16,17],whose:[4,9,17],width:[3,17],with_traceback:5,within:[0,2,3,6,13,15,16,17],without:[13,14,16,17],woohoo:14,word:[13,17],work:16,world:[16,17],would:9,wrap:[4,9],wrapper:4,www:[0,2],x86_64:13,xml:15,yet:[9,13,15,17],yield:16,you:4,your:[3,4,17],zero:[3,9,17],zip:9,zookeep:[13,16]},titles:["IBM Streams Python support","packages","streamsx package","streamsx.ec module","streamsx.rest module","streamsx.rest_errors module","streamsx.rest_primitives module","streamsx.spl package","streamsx.spl.op module","streamsx.spl.spl module","streamsx.spl.toolkit module","streamsx.spl.types module","streamsx.topology package","streamsx.topology.context module","streamsx.topology.mqtt module","streamsx.topology.schema module","streamsx.topology.tester module","streamsx.topology.topology module"],titleterms:{"class":9,"function":[0,2,9],analyt:[0,2,4],api:[0,2,4],applic:[0,2],attribut:9,callabl:17,content:[2,7,12],context:[3,13],dictionari:9,distribut:3,execut:3,from:9,ibm:[0,2],indic:0,initi:[9,17],list:9,modul:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],mqtt:14,name:9,none:9,oper:[0,2,9,17],overview:[3,9,12,17],packag:[1,2,7,12],pass:9,posit:9,premis:[0,2],process:[9,17],python:[0,2,9],rest:[0,2,4],rest_error:5,rest_primit:6,schema:15,select:9,semant:17,servic:[0,2],setup:[0,2],shutdown:[9,17],spl:[0,2,7,8,9,10,11,17],standalon:3,state:[9,17],stream:[0,2,4,17],streamsx:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],style:9,submiss:9,submodul:[2,7,12],subpackag:2,support:0,tabl:0,tester:16,toolkit:10,topolog:[12,13,14,15,16,17],tupl:[9,17],type:11}})