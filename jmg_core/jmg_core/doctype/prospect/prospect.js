// Copyright (c) 2021, JMG and contributors
// For license information, please see license.txt

	
frappe.ui.form.on('Prospect', {
    
    onload(frm){
       
        
    },
    refresh(frm){
         frm.add_custom_button('Test', frm.set_intro(frappe.format(frm.get_selected(), { fieldtype: 'Data' })));
         frappe.show_progress('title', 10, 100, 'description');
         
         frm.get_value()

    }
});