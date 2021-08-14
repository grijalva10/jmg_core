frappe.pages['inbox'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Inbox',
		single_column: true
	});
	
	page.set_title('Inbox');
	let $btn = page.set_primary_action('New', () => create_new(), 'fa fa-address-book');
	page.add_menu_item('Send Email', () => open_email_dialog(), true);
	
	frappe.db.get_list('Property', {
    fields: ['address', 'city']}).then(records => {
    console.log(records);
    	
    });
}

