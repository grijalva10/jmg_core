// Copyright (c) 2021, JMG and contributors
// For license information, please see license.txt

	
frappe.ui.form.on('Lead', {
    
    onload: function(frm){
        
        frm.add_custom_button('Test', '#');
       
    },
    
    refresh: function(frm){
        frm.add_custom_button('Button 1', '#')
        frm.set_footnote('yooo')
        
       //args: { doctype: "Lead", item_group: frm.doc.item_group },
       frm.call('get_linked_doc', { throw_if_missing: true })
       .then(r => {
           if (r.message) {
               let linked_doc = r.message;
               console.log(r.message)
            // do something with linked_doc
            }
           
       })
        
    }
});