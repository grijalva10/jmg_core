frappe.listview_settings['Prospect'] = {
    hide_name_column: true,
    
    button: {
        show: function(doc) {
            return true;
            
        },
        get_label: function() {
            return __('PDF');
            
        },
        get_description: function(doc) {
            return ('Print {0}', [doc.name])
            
        },
        action: function(doc) {
//frappe.set_route("/app/print/Invoice/" + doc.name);
            var objWindowOpenResult = window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
            + "doctype=" + encodeURIComponent("Prospect")
            + "&name=" + encodeURIComponent(doc.name)
            + "&trigger_print=0"
            + "&format=invoice print format"
            + "&no_letterhead=0"
            + "&_lang=en"
            ));
            
            if(!objWindowOpenResult) {
                msgprint(("Please set permission for pop-up windows in your browser!")); return;
                
            }
            
        }
        
    },
    
    button: {
        show: function(doc) {
            return true;
            
        },
        get_label: function() {
            return __('Call');
            
        },
        get_description: function(doc) {
            return ('Print {0}', [doc.name])
            
        },
        action: function(doc) {
//frappe.set_route("/app/print/Invoice/" + doc.name);
            var objWindowOpenResult = window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
            + "doctype=" + encodeURIComponent("Prospect")
            + "&name=" + encodeURIComponent(doc.name)
            + "&trigger_print=0"
            + "&format=invoice print format"
            + "&no_letterhead=0"
            + "&_lang=en"
            ));
            
            if(!objWindowOpenResult) {
                msgprint(("Please set permission for pop-up windows in your browser!")); return;
                
            }
            
        }
        
    }
}
