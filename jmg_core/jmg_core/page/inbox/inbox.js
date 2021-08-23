frappe.pages['inbox'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Inbox',
		single_column: false
	});
	
	page.set_title('Inbox')
	let $btn = page.set_primary_action('New', () => create_new(), 'fa fa-address-book');
	page.add_menu_item('Send Email', () => open_email_dialog(), true);
	
	frappe.db.get_list('Property', {
    fields: ['address', 'city']}).then(records => {
    console.log(records)
    	
    });
	
	frappe.ui.form.make_control({
    parent: $wrapper.find('.my-control'),
    df: {
        label: 'Due Date',
        fieldname: 'due_date',
        fieldtype: 'Date'
    },
    render_input: true
})
}

