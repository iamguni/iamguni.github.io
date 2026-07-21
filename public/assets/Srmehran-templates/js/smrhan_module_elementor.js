jQuery( document ).ready(function() {           
        setInterval(function(){

var html='<div class="elementor-add-section-area-button elementor-add-srmehran-template-button" gggg="myModalddd" title="Srmehran Templates"> <i class="fa fa-folder"></i> </div>';     
        var srm = jQuery("#elementor-preview-iframe").contents().find(".elementor-add-srmehran-template-button")
if(srm.length == 0){
jQuery("#elementor-preview-iframe").contents().find(".elementor-add-new-section").after().prepend(html);
}
        

}, 1000);
        
     jQuery("#elementor-preview-iframe").load(function(){
        jQuery(this).contents().on("click","div.elementor-add-srmehran-template-button" ,function(){
          
                var modal=jQuery(this).attr("gggg");    
            
            jQuery.ajax({

        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "load_ss_auth",    
        },
        success: function(response) {
            var response=JSON.parse(response);
            if(response.status){
                onModal();
            }else{
                onModal3();
            }
            
            
            }
            
            });
            
            
        });
    });  

        function onModal3(){
            window.parent.jQuery('#myModalddd252').css('display','block');
        }
        
        
         function getvaluebyssid(idss){
         var GetAllBrands=[
                        'ESSENTIAL ADDONS',
                        'WOOLENTOR PRO',
                        'HAPPY ELEMENTOR',
                        'PIOTNET ADDONS',
                        'ADDONS ELEMENTOR ',
                        'ANYWHERE ELEMENTOR',
                        'THE PLUS ADDONS',
                        'ULTIMATE ADDONS',
                        'WPKIT FOR ELEMENTOR',
                        'ASTRA TEMPLATES',
                        'SITEOCEANWP TEMPLATES',
                        'ENVATO TEMPLATES',
                        'TEMPLATEMONSTER TEMPLATES',
                        'PORTO TEMPLATES',
                        'SRMEHRANCLUB',
                        'MISCELLANEOUS BRAND',
                        'ELEMENTOR PRO',
                        'MASTER ADDONS',
                        'PRIME SLIDER',
                        'HT MEGA',
                        'CROCOBLOCK',
                        'THE PLUS ADD-ONS',
                        'POWERPACK',
                        'UNLIMITED ELEMENTS',
                        'ELEMENT PACK',
                        'PREMIUM ADD-ONS'
                    ];
                    
                
        for(i=0;i<=GetAllBrands.length;i++){
            var ds=i+1;
            if(ds==idss){
                return GetAllBrands[i];
            }
        }
     }
        
        function onModal(){
            load_ss_Template("",1,12,'insttled');
            window.parent.jQuery('#myModalddd').css('display','block');
        }
     jQuery('.close_template').click(function(){
         jQuery('ul.tabs li').removeClass('current');
         window.parent.jQuery('#myModalddd').css('display','none');
     });
     
     
      jQuery('.close_template364').click(function(){
        
         window.parent.jQuery('#myModalddd252').css('display','none');
     });
         
         
     
     jQuery('.installedkits').click(function(){
         jQuery('ul.tabs li').removeClass('current');
         jQuery(this).addClass('current');
        load_ss_Template("",0,12,'insttled');
     });
     
     
     
     jQuery('.premiumkits').click(function(){
         jQuery('ul.tabs li').removeClass('current');
         jQuery(this).addClass('current');
        load_ss_premiumkits("",0,12,'premiumkits','all');
     });
     
     jQuery('.freekits').click(function(){
         jQuery('ul.tabs li').removeClass('current');
         jQuery(this).addClass('current');
        load_ss_freekits("",0,12,'freekits','all');
     });
     
     jQuery('.freeblocks').click(function(){
         jQuery('ul.tabs li').removeClass('current');
         jQuery(this).addClass('current');
        load_ss_freeblocks("",0,12,'freeblocks','all');
     });
     
     
     
     jQuery(".loadInstalled_ss").on("change", "select#price-fillter-ss", function(){        
                var sub_cat_id_sst=jQuery(this).attr('sub_cat_id_sst');
                var fillterby=jQuery(this).val();
            
            load_ss_freeblocks("",0,12,'freeblocks',sub_cat_id_sst,fillterby);
        });
     jQuery(".loadInstalled_ss").on("click", "a.instelllll", function(){        
            var id=jQuery(this).attr('id');
            fetchInstalledById(id);
        });
        
         jQuery(".loadInstalled_ss").on("click", "a.ss_pagination", function(){ 
            var limit=12;
            var pagenum=parseInt(jQuery(this).attr('pagenum') || 0);
            var catlog=jQuery(this).attr('catlog');
            var start_from = (pagenum-1) * limit;
            
            load_ss_premiumkits("",start_from,limit,'premiumkits',catlog);
            
        });
        
        
        jQuery(".loadInstalled_ss").on("click", "a.ss_free_pagination", function(){ 
            var limit=12;
            var pagenum=jQuery(this).attr('pagenumf');
            var start_from = (pagenum-1) * limit;
            load_ss_freekits("",start_from,limit,'freekits','all');
            
        });
        
        jQuery(".loadInstalled_ss").on("click", "a.loadmore_ss_bloqackss", function(){  
            var limit=12;
            var catlogsub_cat_id=jQuery(this).attr('catlogsub_cat_id');
            
            
            
            var pagenum=jQuery(this).attr('pagenum');
            var start_from = (pagenum-1) * limit;
            
            
            load_ss_freeblocks("",start_from,limit,'freeblocks',catlogsub_cat_id);
        });
        
        
        
        jQuery(".loadInstalled_ss").on("click", "button.search_ss_btn", function(){     
            var bremium=jQuery('._bremium').val();
            if(bremium.length>3){
                load_ss_premiumkits(bremium,0,12,'premiumkits','all');
            }
            
            //alert(bremium);
        });
        
        
        jQuery(".loadInstalled_ss").on("click", "button.search_ss_btn_balock", function(){      
            var brblaocks_ss12=jQuery('._brblaocks_ss12').val();
            if(brblaocks_ss12.length>3){
                var catlogsub_cat_id=jQuery(this).attr('cureeentcat');
                load_ss_freeblocks(brblaocks_ss12,0,12,'freeblocks',catlogsub_cat_id);
                
            }
            
            //alert(bremium);
        });
        
        
        jQuery(".loadInstalled_ss").on("click", "button.ss_search_free_Kit", function(){        
            var free_kit_q=jQuery('.free_kit_q').val();
            if(free_kit_q.length>3){
                load_ss_freekits(free_kit_q,0,12,'freekits','all');
            }
            
            //alert(bremium);
        });
        
        
         jQuery(".loadInstalled_ss").on("click", "button.btnInstallRequirements", function(){       
            var Requirements = document.getElementById("Requirements");
                Requirements.style.display = "block";
        });
        
        jQuery(".loadInstalled_ss").on("click", "span.closerequirements", function(){       
            var Requirements = document.getElementById("Requirements");
                Requirements.style.display = "none";
        });
        
        jQuery(".loadInstalled_ss").on("click", "a.getcatgory", function(){
            var id=jQuery(this).attr('id'); 
            load_ss_premiumkits("",0,12,'premiumkits',id);
    
        });
        
        
        jQuery(".loadInstalled_ss").on("click", "a.getBybrands", function(){
            var getBybrands=jQuery(this).attr('id');    
            load_ss_premiumkits("",0,12,'premiumkits','all',getBybrands);
    
        });
        
        jQuery(".loadInstalled_ss").on("click", "a.getcatgoryfree", function(){
            var id=jQuery(this).attr('id'); 
            load_ss_freekits("",0,12,'freekits',id);
    
        });
        
        jQuery(".loadInstalled_ss").on("click", "a.getBybrandsfreee", function(){
            var getBybrandsfreee=jQuery(this).attr('id');   
            load_ss_freekits("",0,12,'freekits','all',getBybrandsfreee);
            
    
        });
        
        jQuery(".loadInstalled_ss").on("click", "a.freeblocks_byCatgaory", function(){
            
            
            var id=jQuery(this).attr('id'); 
            
            jQuery('.curr_sset').attr('cureeentcat',id);
            
            load_ss_freeblocks("",0,12,'freeblocks',id);
    
        });
        
        
        jQuery(".loadInstalled_ss").on("click", "a.install_primium_ss_kit", function(){
                
            var template_id=jQuery(this).attr('template_id');   
            install_primium_ss_kit(template_id,'PremiumTemplate');
    
        });
        
        jQuery(".loadInstalled_ss").on("click", "a.install_free_ss_kit", function(){
                
            var template_id=jQuery(this).attr('template_free_id');  
            install_primium_ss_kit(template_id,'Free_kits');
    
        });
        
        
        
        jQuery(".loadInstalled_ss").on("click", "a.import_ss_template", function(){
            
            var kit_ss_id=jQuery(this).attr('kit_ss_id');   
            var tem_ss_id=jQuery(this).attr('tem_ss_id');   
            import_ss_data(kit_ss_id,tem_ss_id);
    
        });
        
        jQuery(".loadInstalled_ss").on("click", "a.install_ss_freeblocks", function(){
            
            var blocks_id=jQuery(this).attr('id_ss_sr');
                intall_blocks_template(blocks_id,'Free_Blocks');
            
        });
        
     
     function load_ss_Template(search="",min=1,max=12,posttype){
 
         jQuery.ajax({

        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "load_ss_Template",
            search:search,
            min:min,
            max:max,
            posttype:posttype
            
        },
         beforeSend: function() {
        // setting a timeout
        result='<div class="loader_ss">';
        result+='<img src="https://s3.us-east-2.wasabisys.com/srmehranclub/2020/08/sr-load.gif"/>';
        result+='</div>';
        window.parent.jQuery('.loadInstalled_ss').html(result);
        
        },
        success: function(response) {
            var response=JSON.parse(response);
            var result = "";
            result += '<div class="srmehran-pag-heading">';
                                result +='<div class="srmehran-pag-heading-txt">';
                                    result +='<h1 class="envato-hd">Installed Template Kits</h1>';
                                    result +='<p class="one-line">These are the Template Kits installed on this WordPress website</p>';
                                result +='</div>';
                            result +='</div>';
                            result +='<hr style="height: 50px; border: 0; border-top: 1px solid #eee;">';
                            
            if(response){
                var data=response.data;
                jQuery.each(data, function(i, item) {
                        
                        result +='<div class="envato-theme">';
                                result +='<div class="theme-img">';
                                    result +='<img src="'+data[i].screenshot_url+'">';
                                result +='</div>';
                                result +='<div class="envato-info">';
                                    result +='<h6>'+data[i].title+'</h6>';
                                    result +='<small>Contains '+data[i].template_count+' template</small>';
                                    result +='<div class="btn-d">';
                                    result +='<a  class="theme-btn instelllll viewInstallKit-btn" id="'+data[i].id+'"><i class="fa fa-plus" aria-hidden="true"></i>view installed kit</a>';
                                    result +=' </div>';
                                result +='</div>';
                            result +='</div>';
                    
                    });
                    window.parent.jQuery('.loader_ss').css('display','none');
                
            }
            
            window.parent.jQuery('.loadInstalled_ss').html(result);
            
        }
        
     });
         
         
     }
     
    jQuery(".loadInstalled_ss").on("click", "a.instelllll", function(){     
            var id=jQuery(this).attr('id');
            fetchInstalledById(id);
        }); 
     function fetchInstalledById(dataId){
    jQuery.ajax({
        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "load_ss_Template_ById",
            dataId:dataId
        },
         beforeSend: function() {
        // setting a timeout
        var result='';
        window.parent.jQuery('.loadInstalled_ss').html(result);
        },
        success: function(response) {
            var response=JSON.parse(response);
            var result = "";
            
                            
            if(response){
                
                
                result +='<div class="srmehran-pag-heading">';
                result +='<div class="srmehran-pag-heading-txt">';
                    result +='<h1 class="envato-hd">'+response.data.title+'</h1>';
                    result +='<div class="plugin_ss_requirement">';
                                result +='<p class="one-line"><span>Attention!</span> There are '+response.data.requirements.plugins.length+' requirements that need installing for this Template Kit to work correctly</p>';   
                                result +='<button class="btnInstallRequirements"><i class="fa fa-info" aria-hidden="true"></i> Install Requirements</button>';
                            
                    result +='</div>';
                result +='</div>';
             result +='</div>';
                result +='<hr style="height: 50px; border: 0; border-top: 1px solid #eee;">';
                var data=response.data.templates;
                jQuery.each(data, function(i, item) {
                        
                        result +='<div class="envato-theme">';
                                result +='<div class="theme-img">';
                                    result +='<img src="'+data[i].screenshot_url+'">';
                                result +='</div>';
                                result +='<div class="envato-info">';
                                    result +='<h6>'+data[i].name+'</h6>';
                                    
                                    result +='<div class="btn-d">';
                                    result +='<a  class="theme-btn import_ss_template" id="btn_ss'+data[i].id+'"  kit_ss_id="'+response.data.id+'"  tem_ss_id="'+data[i].id+'" ><i class="fa fa-plus" id="ins_ss'+data[i].id+'" aria-hidden="true"></i>Insert Template</a>';
                                    result +=' </div>';
                                result +='</div>';
                            result +='</div>';
                    
                    });
                    
                    if(response.data.requirements.plugins.length>0){
                        var dataplugin=response.data.requirements.plugins;
                        result +='<div id="Requirements" class="modal">';
                    result +='<div class="modal-content">';
                        result +='<span class="closerequirements">×</span>';
                                result +='<div class="ssplugins">';
                                                        result +='<table class="tabelss">';
                                                            result +='<tr>';
                                                                result +='<th>Name</th>';
                                                                result +='<th>Version</th>';
                                                                result +='<th>Status</th>';
                                                                result +='<th>Action</th>';
                                                            result +='</tr>';
                                                            
                                                        jQuery.each(dataplugin, function(i, item) {
                                                            result +='<tr>';
                                                                result +='<td>'+dataplugin[i].name+'</td>';
                                                                result +='<td>'+dataplugin[i].version+'</td>';
                                                                result +='<td>'+dataplugin[i].status+'</td>';
                                                                result +='<td><a href="'+dataplugin[i].url+'" target="_blank">Activate</a></td>';
                                                            result +='</tr>';
                                                        });
                                                            result +='</table>';
                                                    result +='</div>';
                                                    
                                                if(response.data.requirements.css.length>0){    
                                                    result +='<div class="cssimpoerterclss">';
                                                    jQuery.each(response.data.requirements.css, function(zf, sccs) {
                                                                result +='<h4>'+sccs.description+'</h4>';
                                                                result +='<pre>'+sccs.css_preview+'</pre>';
                                                    });
                                                    
                                                result +='</div>';
                                                
                                                }
                                                result +='</div>';
                                                result +='</div>';
                    }
                    
                
            }
            
            window.parent.jQuery('.loadInstalled_ss').html(result);
            
        }
        
     });
     }
     
     
     
    
     
     function load_ss_premiumkits(search="",min=1,max=2,posttype,catId,getBybrands=""){
          jQuery.ajax({

        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "load_ss_premiumkits",
            search:search,
            min:min,
            max:max,
            posttype:posttype,
            getBybrands:getBybrands,
            catId:catId
            
        },
         beforeSend: function() {
        // setting a timeout
        result='<div class="loader_ss">';
        result+='<img src="https://s3.us-east-2.wasabisys.com/srmehranclub/2020/08/sr-load.gif"/>';
        result+='</div>';
        window.parent.jQuery('.loadInstalled_ss').html(result);
        
        },
        success: function(response) {
        
            
            var response=JSON.parse(response);
            var getProdcutApi=JSON.parse(response.getProdcutApi);
            
            console.log(getProdcutApi);
            var result = "";
            result += '<div class="srmehran-pag-heading">';
                                result +='<div class="srmehran-pag-heading-txt">';
                                    result +='<h1 class="envato-hd">Premium Template Kits</h1>';
                                    result +='<p class="one-line">Browse our collection of '+getProdcutApi.total_products+' Premium Template Kits</p>';
                                result +='</div>';
                                result +='<div class="search-container">';
                   
                        result +='<input type="hidden" name="page" value="srmehran-premium-kits"/>';
                        result +='<input type="hidden" name="_bremium"  value="256"/>';
                      result +='<input type="text" placeholder="Search.." class="_bremium" name="q" required>';
                      
                     result +=' <button type="submit" class="search_ss_btn"><span class="dashicons dashicons-search"></span></button>';
                  
                result +='</div>';
                            result +='</div>';
                            result +='<hr style="height: 50px; border: 0; border-top: 1px solid #eee;">';
                            
            if(response){
                
                var getTemplateCatgories=response.getTemplateCatgories;
                var GetAllBrands=response.GetAllBrands;
                
                
                var getTemplateCatgories=JSON.parse(getTemplateCatgories);
                

                
                var catgoriesdata=getTemplateCatgories.data;
            
                result +='<div class="categories-d-main">';
                
                    result +='<div class="categories-d">';
                                result +='<div class="categories-main">';
                                    result +='<span>Brands <i class="fa fa-angle-down" aria-hidden="true"></i>';
                                    result +='<i class="fa fa-angle-up" aria-hidden="true"></i></span>';
                                result +='<div class="categories-content">';
                                    result +='<ul>';
                jQuery.each(GetAllBrands, function(i, item) {
                        
                result +='<li><a class="getBybrands" id="'+i+'">'+item+'</a></li>';
                                        
                    });
                    
                                result +='</ul>';
                                result +='</div>';
                                result +='</div>';
                                result +='</div>';
                            
                                
                
                
                
                result +='<div class="categories-d">';
                                result +='<div class="categories-main">';
                                    result +='<span>categories <i class="fa fa-angle-down" aria-hidden="true"></i>';
                                    result +='<i class="fa fa-angle-up" aria-hidden="true"></i></span>';
                                result +='<div class="categories-content">';
                                    result +='<ul>';
                jQuery.each(catgoriesdata, function(i, item) {
                        
                result +='<li><a class="getcatgory" id="'+catgoriesdata[i].id+'">'+catgoriesdata[i].name+'</a></li>';
                                        
                    });
                    
                                result +='</ul>';
                                result +='</div>';
                                result +='</div>';
                                
                            result +='</div>';
                            result +='</div>';
                            
                            
                        
                            var getProdcutdata=getProdcutApi.data;
                        
                            if(getProdcutApi.status){
                                jQuery.each(getProdcutdata, function(i, item) {
                                    var thumbnail_link;
                                    if(getProdcutdata[i].thumbnail_link!=null){
                                        thumbnail_link=getProdcutdata[i].thumbnail_link;
                                    }else{
                                        thumbnail_link='gg';
                                    }
                                    
                                    result +='<div class="envato-theme">';
                result +='<div class="theme-img">';
                    result +='<img src="https://database.srmehranclub.com/storage/'+thumbnail_link+'" alt="'+getProdcutdata[i].title+'">';
                result +='</div>';
                result +='<div class="envato-info">';
                    result +='<h6>'+getProdcutdata[i].title+'</h6>';
                    result +='<span>'+getvaluebyssid(getProdcutdata[i].brand_id)+'</span>';
                    
                    result +='<div class="btn-d">';
                    if(response.getinstall[getProdcutdata[i].id]){
                        result +='<a  class="theme-btn instelllll" id="'+response.getinstall[getProdcutdata[i].id]+'"><i class="fa fa-eye" aria-hidden="true"></i>View Kit</a>';
                        result +='<a href="JavaScript:void(0);"  id="btn_ss'+getProdcutdata[i].id+'" class="theme-btn install_primium_ss_kit" template_id="'+getProdcutdata[i].id+'"><i class="fa fa-plus" id="ins_ss'+getProdcutdata[i].id+'"  aria-hidden="true"></i>Import Again</a>';
                        
                    }else{
                        
                        result +='<a href="JavaScript:void(0);"  id="btn_ss'+getProdcutdata[i].id+'" class="theme-btn install_primium_ss_kit" template_id="'+getProdcutdata[i].id+'"><i class="fa fa-plus" id="ins_ss'+getProdcutdata[i].id+'"  aria-hidden="true"></i>Install Kit</a>';
                        result +='<p style="color:red" id="mess'+getProdcutdata[i].id+'"></p>';
                    }
                    
                    
                     result +='</div>';
                    result +=' <div class="botm-btn">';
                        result +='<a href="'+getProdcutdata[i].more_info_link+'" class="moreInfo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="171" height="171" viewBox="0 0 171 171" fill="none"><path d="M66.6594 1.93071C42.926 7.13071 20.2594 24.864 9.45938 46.7307C-7.47396 80.864 -1.34062 118.731 25.1927 145.264C58.6594 178.864 111.726 178.864 145.193 145.264C178.793 111.797 178.793 58.7307 145.193 25.264C124.526 4.46404 95.1927 -4.20263 66.6594 1.93071ZM101.726 36.7307C111.593 46.5974 99.326 61.9307 86.7927 55.3974C78.7927 51.264 77.5927 43.3974 83.726 37.1307C89.0594 31.9307 96.6594 31.664 101.726 36.7307ZM91.4594 71.3974C98.2594 75.7974 98.526 83.1307 92.526 103.531C90.6594 109.931 89.1927 117.664 89.1927 120.864C89.1927 125.797 89.5927 126.597 92.526 127.397C94.3927 127.797 97.726 127.931 99.9927 127.397C105.993 126.197 104.659 130.597 97.8594 133.931C89.9927 137.664 78.926 138.064 73.4594 134.731C65.4594 129.531 64.926 123.131 71.1927 101.664C76.926 81.9307 75.1927 76.064 64.526 78.064C61.9927 78.464 59.8594 78.3307 59.8594 77.7974C59.9927 74.9974 62.6594 72.7307 69.326 70.464C77.326 67.5307 86.2594 67.9307 91.4594 71.3974Z" fill=""/></svg><span>More Info</span></a>';
                        result +='<a href="'+getProdcutdata[i].live_link+'" class="preview" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="171" height="102" viewBox="0 0 171 102" fill="none"><path d="M66.3449 2.02051C46.6116 6.42051 30.0782 16.1538 13.4116 32.9538C6.61156 39.7538 0.744893 46.8205 0.21156 48.6872C-0.855107 53.2205 1.81156 56.9538 15.1449 70.1538C57.0116 111.754 113.012 111.754 154.878 70.1538C168.212 56.9538 170.878 53.2205 169.812 48.6872C168.478 43.4872 145.545 21.2205 134.745 14.8205C112.345 1.48718 88.2116 -3.04615 66.3449 2.02051ZM97.2782 17.3538C110.078 22.1538 121.012 37.0872 121.012 49.7538C121.012 64.8205 109.678 80.4205 95.8116 84.5539C86.2116 87.3539 81.1449 87.2205 72.7449 84.0205C59.8116 79.0872 49.0116 64.2872 49.0116 51.4872C49.0116 36.9538 59.5449 22.0205 73.0116 17.3538C82.4782 14.0205 88.6116 14.0205 97.2782 17.3538Z" fill=""/><path d="M75.1448 34.5539C69.4115 38.4205 66.3448 43.8872 66.3448 50.6872C66.3448 61.8872 73.9448 69.3539 85.2782 69.3539C103.678 69.3539 110.878 44.1539 95.2782 34.6872C89.6782 31.2205 80.2115 31.2205 75.1448 34.5539Z" fill=""/></svg> <span>Preview</span></a>';
                    result +='</div>';
                result +='</div>';
            result +='</div>';
                                    
                                    });
                                
                                result +='<div class="srmehran-pagination mainpagination">';
                                var i;
                                var total=Math.ceil(getProdcutApi.total_products/max);
                                    
                                if(total>1){
                                for(i=1;i<=1;i++){
                                    if(i==min+1){
                                        var clas="active";
                                    }else{
                                        var clas="";
                                    }
                                    // if(response.mincoun){
                                    //  var mincoun=parseInt(response.mincoun)-9;
                                    // }else{
                                    //  var mincoun=2;
                                    // }

                                    var mincoun=1;
                                    if(response.mincoun>10){
                                        var c=response.mincoun/12;
                                        mincoun=c+2;
                                    }else{
                                        mincoun=mincoun+1;
                                    }
                                    
                                
                                    result +='<a class="ss_pagination loadmore_ss   '+clas+'" catlog="'+response.iscatory+'"  pagenum="'+mincoun+'">Load More</a>';
                                }
                                }
                                
                                result +='</div>';
                                
                                
                            }
                            
                            
                    window.parent.jQuery('.loader_ss').css('display','none');
                
            }
            
            window.parent.jQuery('.loadInstalled_ss').html(result);
            
        }
        
     });
     }
     
     
      function load_ss_freekits(search="",min=0,max=12,posttype,catId,getBybrands="all"){
          jQuery.ajax({

        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "load_ss_freekits",
            search:search,
            min:min,
            max:max,
            posttype:posttype,
            getBybrands:getBybrands,
            catId:catId
            
        },
         beforeSend: function() {
        // setting a timeout
        result='<div class="loader_ss">';
        result+='<img src="https://s3.us-east-2.wasabisys.com/srmehranclub/2020/08/sr-load.gif"/>';
        result+='</div>';
        window.parent.jQuery('.loadInstalled_ss').html(result);
        
        },
        success: function(response) {
            var response=JSON.parse(response);
            
            var GetAllBrands=response.GetAllBrands;
            
            var result = "";
            result += '<div class="srmehran-pag-heading">';
                                result +='<div class="srmehran-pag-heading-txt">';
                                    result +='<h1 class="envato-hd">Free Template Kits</h1>';
                                    result +='<p class="one-line">Browse Our Collection  Free Individual Templates</p>';
                                result +='</div>';
                                result +='<div class="search-container">';
                    
                        result +='<input type="hidden" name="page" value="srmehran-premium-kits"/>';
                        result +='<input type="hidden" name="_bremium" value="256"/>';
                      result +='<input type="text" placeholder="Search.." class="free_kit_q" name="q" required>';
                      
                     result +=' <button type="submit" class="ss_search_free_Kit"><span class="dashicons dashicons-search"></span></button>';
                result +='</div>';
                            result +='</div>';
                            result +='<hr style="height: 50px; border: 0; border-top: 1px solid #eee;">';
                            
            if(response){
                
                var getTemplateCatgories=response.getTemplateCatgories;
                var getTemplateCatgories=JSON.parse(getTemplateCatgories);
                var catgoriesdata=getTemplateCatgories.data;
                
                
                result +='<div class="categories-d-main">';
                
                    result +='<div class="categories-d">';
                                result +='<div class="categories-main">';
                                    result +='<span>Brands <i class="fa fa-angle-down" aria-hidden="true"></i>';
                                    result +='<i class="fa fa-angle-up" aria-hidden="true"></i></span>';
                                result +='<div class="categories-content">';
                                    result +='<ul>';
                jQuery.each(GetAllBrands, function(i, item) {
                        
                result +='<li><a class="getBybrandsfreee" id="'+i+'">'+item+'</a></li>';
                                        
                    });
                    
                                result +='</ul>';
                                result +='</div>';
                                result +='</div>';
                                result +='</div>';
                            
                
                
                result +='<div class="categories-d">';
                                result +='<div class="categories-main">';
                                    result +='<span>categories <i class="fa fa-angle-down" aria-hidden="true"></i>';
                                    result +='<i class="fa fa-angle-up" aria-hidden="true"></i></span>';
                                result +='<div class="categories-content">';
                                    result +='<ul>';
                jQuery.each(catgoriesdata, function(i, item) {
                        
                result +='<li><a class="getcatgoryfree" id="'+catgoriesdata[i].id+'">'+catgoriesdata[i].name+'</a></li>';
                                        
                    });
                    
                                result +='</ul>';
                                result +='</div>';
                                result +='</div>';
                                
                            result +='</div>';
                            result +='</div>';
                            
                            
                            var getProdcutApi=JSON.parse(response.getProdcutApi);
                            var getProdcutdata=getProdcutApi.data;
                            if(getProdcutApi.status){
                                jQuery.each(getProdcutdata, function(i, item) {
                                    
                                    result +='<div class="envato-theme">';
                result +='<div class="theme-img">';
                    result +='<img src="https://database.srmehranclub.com/storage/'+getProdcutdata[i].thumbnail_link+'" alt="'+getProdcutdata[i].title+'">';
                result +='</div>';
                result +='<div class="envato-info">';
                    result +='<h6>'+getProdcutdata[i].title+'</h6>';
                    
                    result +='<div class="btn-d">';
                    if(response.getinstall[getProdcutdata[i].id]){
                        result +='<a  class="theme-btn instelllll" id="'+response.getinstall[getProdcutdata[i].id]+'"><i class="fa fa-eye" aria-hidden="true"></i>View Kit</a>';
                        result +='<a href="JavaScript:void(0);"  id="btn_ss'+getProdcutdata[i].id+'" class="theme-btn install_free_ss_kit" template_free_id="'+getProdcutdata[i].id+'"><i class="fa fa-plus" id="ins_ss'+getProdcutdata[i].id+'"  aria-hidden="true"></i>Import Again</a>';
                    }else{
                        result +='<a href="JavaScript:void(0);"  id="btn_ss'+getProdcutdata[i].id+'" class="theme-btn install_free_ss_kit" template_free_id="'+getProdcutdata[i].id+'"><i class="fa fa-plus" id="ins_ss'+getProdcutdata[i].id+'"  aria-hidden="true"></i>Install Kit</a>';
                        
                    }
                    
                    
                     result +='</div>';
                    result +=' <div class="botm-btn">';
                       result +='<a href="'+getProdcutdata[i].more_info_link+'" class="moreInfo" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="171" height="171" viewBox="0 0 171 171" fill="none"><path d="M66.6594 1.93071C42.926 7.13071 20.2594 24.864 9.45938 46.7307C-7.47396 80.864 -1.34062 118.731 25.1927 145.264C58.6594 178.864 111.726 178.864 145.193 145.264C178.793 111.797 178.793 58.7307 145.193 25.264C124.526 4.46404 95.1927 -4.20263 66.6594 1.93071ZM101.726 36.7307C111.593 46.5974 99.326 61.9307 86.7927 55.3974C78.7927 51.264 77.5927 43.3974 83.726 37.1307C89.0594 31.9307 96.6594 31.664 101.726 36.7307ZM91.4594 71.3974C98.2594 75.7974 98.526 83.1307 92.526 103.531C90.6594 109.931 89.1927 117.664 89.1927 120.864C89.1927 125.797 89.5927 126.597 92.526 127.397C94.3927 127.797 97.726 127.931 99.9927 127.397C105.993 126.197 104.659 130.597 97.8594 133.931C89.9927 137.664 78.926 138.064 73.4594 134.731C65.4594 129.531 64.926 123.131 71.1927 101.664C76.926 81.9307 75.1927 76.064 64.526 78.064C61.9927 78.464 59.8594 78.3307 59.8594 77.7974C59.9927 74.9974 62.6594 72.7307 69.326 70.464C77.326 67.5307 86.2594 67.9307 91.4594 71.3974Z" fill=""/></svg><span>More Info</span></a>';
                        result +='<a href="'+getProdcutdata[i].live_link+'" class="preview" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="171" height="102" viewBox="0 0 171 102" fill="none"><path d="M66.3449 2.02051C46.6116 6.42051 30.0782 16.1538 13.4116 32.9538C6.61156 39.7538 0.744893 46.8205 0.21156 48.6872C-0.855107 53.2205 1.81156 56.9538 15.1449 70.1538C57.0116 111.754 113.012 111.754 154.878 70.1538C168.212 56.9538 170.878 53.2205 169.812 48.6872C168.478 43.4872 145.545 21.2205 134.745 14.8205C112.345 1.48718 88.2116 -3.04615 66.3449 2.02051ZM97.2782 17.3538C110.078 22.1538 121.012 37.0872 121.012 49.7538C121.012 64.8205 109.678 80.4205 95.8116 84.5539C86.2116 87.3539 81.1449 87.2205 72.7449 84.0205C59.8116 79.0872 49.0116 64.2872 49.0116 51.4872C49.0116 36.9538 59.5449 22.0205 73.0116 17.3538C82.4782 14.0205 88.6116 14.0205 97.2782 17.3538Z" fill=""/><path d="M75.1448 34.5539C69.4115 38.4205 66.3448 43.8872 66.3448 50.6872C66.3448 61.8872 73.9448 69.3539 85.2782 69.3539C103.678 69.3539 110.878 44.1539 95.2782 34.6872C89.6782 31.2205 80.2115 31.2205 75.1448 34.5539Z" fill=""/></svg> <span>Preview</span></a>';
                    result +='</div>';
                result +='</div>';
            result +='</div>';
                                    
                                    });
                                
                                result +='<div class="srmehran-pagination">';
                                var i;
                                var total=Math.ceil(getProdcutApi.total_products/max);
                                let currentPage=min/12;
                                let crActivePage=currentPage+1;
                                for(i=1;i<=total;i++){
                                    if(i==crActivePage){
                                        var clas="active";
                                    }else{
                                        var clas="";
                                    }
                                    result +='<a class="ss_free_pagination '+clas+'"  pagenumf="'+i+'">'+i+'</a>';
                                }
                                 
                                
                                result +='</div>';
                            }
                            
                            
                window.parent.jQuery('.loader_ss').css('display','none');
                
            }
            
            window.parent.jQuery('.loadInstalled_ss').html(result);
            
        }
        
     });
     }
     
    function load_ss_freeblocks(search,min,max,posttype,catId,p_ssfillter='all'){
        jQuery.ajax({

        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "load_ss_free_blocks",
            search:search,
            min:min,
            max:max,
            posttype:posttype,
            p_ssfillter:p_ssfillter,
            catId:catId
            
        },
         beforeSend: function() {
        // setting a timeout
        result='<div class="loader_ss">';
        result+='<img src="https://s3.us-east-2.wasabisys.com/srmehranclub/2020/08/sr-load.gif"/>';
        result+='</div>';
        window.parent.jQuery('.loadInstalled_ss').html(result);
        
        },
        success: function(response) {
            var response=JSON.parse(response);
            
            
            
            var result = "";
            if(response.status=='by_ss_Id'){
                var ss_data=response.ss_data;
                var catdata=JSON.parse(ss_data);
                var catItem=catdata.data;
                if(catItem){
                    var sub_cat_idss=catItem[0].sub_cat_id;
                }else{
                    var sub_cat_idss='';
                }
            
                console.log(catItem);
                result += '<div class="srmehran-pag-heading">';
                                result +='<div class="srmehran-pag-heading-txt">';
                                    result +='<h1 class="envato-hd"> Blocks</h1>';
                                    result +='<p class="one-line">Browse Our Collection Of '+catdata?.total_products+' Blocks Categories</p>';
                                result +='</div>'; 
                                
                                
                            result +='<div class="price-fillter">'; 
                            result +='<select id="price-fillter-ss"  sub_cat_id_sst="'+sub_cat_idss+'">';   
                            result +='<option value="">--Select--</option>';    
                            result +='<option value="1">Free</option>'; 
                            result +='<option value="2">Paid</option>'; 
                                result +='</select >';  
                            result +='</div>';
                            
                            
                        result +='<div class="search-container">';
                   
                        
                        result +='<input type="hidden" name="_bremium"  value="256555"/>';
                      result +='<input type="text" placeholder="Search.." class="_brblaocks_ss12" name="q" required>';
                      
                     result +=' <button type="submit" class="search_ss_btn_balock" catlogsub_cat_id_ss="'+sub_cat_idss+'"><i class="fa fa-search"></i></button>';
                  
                result +='</div>';
                            
                            result +='</div>';
                            result +='<hr style="height: 50px; border: 0; border-top: 1px solid #eee;">';
                jQuery.each(catItem, function(i, item) {
                        
                        result +='<div class="envato-theme">';
                            result +='<div class="theme-img">';
                                result +='<img src="https://database.srmehranclub.com/storage/'+catItem[i].thumbnail_link+'">';
                            result +='</div>';
                            result +='<div class="envato-info">';
                                result +='<h6>'+catItem[i].title+'</h6>';
                                if(catItem[i].price_type==1){
                                    result +='<small>Free</small>';
                                }else{
                                    result +='<small>Premium</small>';
                                }
                                
                                result +='<div class="btn-d">';
                                
                                result +='<a  class="theme-btn  install_ss_freeblocks" id_ss_sr="'+catItem[i].id+'"  id="instaler_ss'+catItem[i].id+'"><i class="fa fa-plus" id="instalerIcon_s'+catItem[i].id+'" aria-hidden="true"></i>Import Template</a>';
                                result +='<p style="color:red" id="mess'+catItem[i].id+'"></p>';
                                result +='</div>';
                                 
                            result +='</div>';
                        result +='</div>';
                        
                        
                    });
                    
                console.log(catdata);
                    result +='<div class="srmehran-pagination mainpagination">';
                                var i;
                                var total=Math.ceil(catdata.total_products/max);
                                    console.log(response.mincoun);
                                if(total>1){
                                for(i=1;i<=1;i++){
                                    if(i==min+1){
                                        var clas="active";
                                    }else{
                                        var clas="";
                                    }
                                    // if(response.mincoun){
                                    //  var mincoun=parseInt(response.mincoun)-9;
                                    // }else{
                                    //  var mincoun=2;
                                    // }

                                    var mincoun=1;
                                    if(response.mincoun>10){
                                        var c=response.mincoun/12;
                                        mincoun=c+2;
                                    }else{
                                        mincoun=mincoun+1;
                                    }
                                    
                                    
                                    result +='<a class="loadmore_ss_bloqackss   '+clas+'" catlogsub_cat_id="'+sub_cat_idss+'"  pagenum="'+mincoun+'">Load More</a>';
                                }
                                }
                                
                                result +='</div>';
            }
            else 
                if(response.status){
            result += '<div class="srmehran-pag-heading">';
                                result +='<div class="srmehran-pag-heading-txt">';
                                    result +='<h1 class="envato-hd">Free Blocks</h1>';
                                    result +='<p class="one-line">Browse Our Collection Of '+response.data.length+' Free Blocks Categories</p>';
                                result +='</div>';
                            result +='</div>';
                            result +='<hr style="height: 50px; border: 0; border-top: 1px solid #eee;">';
            
                var data=response.data;
                result +='<ul class="blocks">';
                jQuery.each(data, function(i, item) {
                    result +=`<li><a class="freeblocks_byCatgaory" id="${data[i].id}">
                            <div class="srmblock-main-img">
                                <img src="${smrhan_vars?.srminfo_url}/images/blocks/${data[i].name}.png"/>
                                
                            </div>
                    ${data[i].name}
                        <img class="srmblock-main-imgArrow" src="${smrhan_vars?.srminfo_url}/images/right-arrow.png"/>
                    </a>

                </li>`;
                
                });
                result +='</ul>';
            }
            window.parent.jQuery('.loadInstalled_ss').html(result);
            window.parent.jQuery('.loader_ss').css('display','none');
            
        }

     });
     }
    
    
    function install_primium_ss_kit(template_id,PostType){
        jQuery.ajax({

        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "get_import_SrmehranApi",
            project_id:template_id,
            button_id:'btn'+template_id,
            type:PostType
        },
        beforeSend: function() {
            jQuery('#ins_ss'+template_id).removeClass('fa-plus');
        jQuery('#ins_ss'+template_id).addClass('fa-refresh');
        jQuery('#ins_ss'+template_id).addClass('fa-spin');
        jQuery('#btn_ss'+template_id).addClass('desbaledcode');
            
        },
        success: function(response) {
            var response=JSON.parse(response);
            if(response.status=='success'){
                jQuery('#btn_ss'+template_id).text('View Kit');
                jQuery('#btn_ss'+template_id).addClass('instelllll');
                jQuery('#btn_ss'+template_id).attr('id',response.data);
                jQuery('#ins_ss'+template_id).removeClass('fa-plus');
                
                jQuery('#ins_ss'+template_id).addClass('fa-eye');
            }else{
                
                jQuery('#btn_ss'+template_id).text('Try Again');
                jQuery('#btn_ss'+template_id).removeClass('desbaledcode');
                jQuery('#mess'+template_id).html('It seems you do not have any membership plan so take the membership to import premium templates <a href="https://srmehranclub.com/membership/" target="_blank">- click here</a>');
            }
            
            
        }
        });
        
        
    }
    
    
    
    function import_ss_data(kitid,template_id){
        
        
        jQuery.ajax({

        type : "POST",
        url :'/wp-admin/admin-ajax.php',
        data : {
            action : "get_import_templatess",
            template_kit_id:kitid,
            template_id:template_id,
            installBy_ss:'elementor_ss_button'
        },
        beforeSend: function() {
            jQuery('#ins_ss'+template_id).removeClass('fa-plus');
        jQuery('#ins_ss'+template_id).addClass('fa-refresh');
        jQuery('#ins_ss'+template_id).addClass('fa-spin');
        jQuery('#btn_ss'+template_id).addClass('desbaledcode');
            
        },
        success: function(response) {
            var response=JSON.parse(response);
            var e=response.imported__sss_ff;

            var t = 0;
             for (var o = $e.internal("document/history/start-log", { type: "add", title: "Add Envato Elements Content" }), r = 0; r < e.content.length; r++)
                                        $e.run("document/elements/create", { container: elementor.getPreviewContainer(), model: e.content[r], options: t >= 0 ? { at: t++ } : {} });
                                    $e.internal("document/history/end-log", { id: o });
            window.parent.jQuery('#myModalddd').css('display','none');
             
            
        }
        });
        
        
    }
    
    
    
     function intall_blocks_template(blocks_id,blockstype){

        jQuery.ajax({

        type : "POST",
        url : '/wp-admin/admin-ajax.php',
        data : {
            action : "get_import_free_Blocks",
            blocks_id:blocks_id,
            blockstype:blockstype,
            instellByPopup:'ss_id'
        },
         beforeSend: function() {
        // setting a timeout
        jQuery('#instalerIcon_s'+blocks_id).removeClass('fa-plus');
        jQuery('#instalerIcon_s'+blocks_id).addClass('fa-refresh');
        jQuery('#instalerIcon_s'+blocks_id).addClass('fa-spin');
        jQuery('#instaler_ss'+blocks_id).addClass('desbaledcode');
        
        },
        success: function(response) {
            var response=JSON.parse(response);
            console.log(response);
            if(response.status){
            var e=response.data;
            var t = 0;
             for (var o = $e.internal("document/history/start-log", { type: "add", title: "Add Envato Elements Content" }), r = 0; r < e.content.length; r++)
                                        $e.run("document/elements/create", { container: elementor.getPreviewContainer(), model: e.content[r], options: t >= 0 ? { at: t++ } : {} });
                                    $e.internal("document/history/end-log", { id: o });
            window.parent.jQuery('#myModalddd').css('display','none');
            }else{
                jQuery('#instalerIcon_s'+blocks_id).addClass('fa-plus');
                jQuery('#instalerIcon_s'+blocks_id).removeClass('fa-refresh');
                jQuery('#instalerIcon_s'+blocks_id).removeClass('fa-spin');
                jQuery('#instaler_ss'+blocks_id).addClass('desbaledcode');
                jQuery('#mess'+blocks_id).html('It seems you do not have any membership plan so take the membership to import premium templates <a href="https://srmehranclub.com/membership/" target="_blank">- click here</a>');
            }
        }
        
     });
        
     }
    
    
    console.log( "ready!" );
    });