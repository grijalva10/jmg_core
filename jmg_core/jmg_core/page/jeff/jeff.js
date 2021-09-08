frappe.pages['jeff'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Jeff',
		single_column: false
	});
	frappe.breadcrumbs.add("Jeff");
	page.add_menu_item('Property', () => frappe.set_route('List', 'Property'));

	$(frappe.render_template("jeff_help", {})).appendTo(page.main);
}