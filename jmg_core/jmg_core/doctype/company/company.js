// Copyright (c) 2021, JMG and contributors
// For license information, please see license.txt

 frappe.ui.form.on('Company', {
    
	refresh: function(frm) {
		
		frm.page.add_action_icon(__("mail"), function() {
			frappe.msgprint("email");
			new frappe.views.CommunicationComposer();
			
		});
		
		frm.page.add_action_icon(__("fa fa-car text-warning"), function() {
			frappe.msgprint("get_doc_info");
			cur_frm.trigger("get_doc_info");
			
		});
		
	}
	
});
