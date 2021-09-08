frappe.provide('frappe.ui.misc');
frappe.ui.misc.about = function() {
	if(!frappe.ui.misc.about_dialog) {
		var d = new frappe.ui.Dialog({title: __('We are Searchpackers')});

		$(d.body).html(repl("<div>\
        <p><i class='fa fa-phone fa-fw'></i>\
			<b>Mobile:</b> <a href='tel:+918586885577'></a>+918586885577</p>\
            <p><i class='fa fa-envelope fa-fw'></i>\
			<b>Email:</b> <a href='mailto:hi@searchpackers.com'>hi@searchpackers.com</a></p>\
		<p><i class='fa fa-globe fa-fw'></i>\
			<b>Website:</b> <a href='http://searchpackers.com' target='_blank'>https://searchpackers.com</a></p>\
		<p><i class='fa fa-facebook fa-fw'></i>\
			<b>Facebook:</b> <a href='https://facebook.com/searchpackers' target='_blank'>https://facebook.com/searchpackers</a></p>\
		<p><i class='fa fa-instagram fa-fw'></i>\
			<b>Instagram:</b> <a href='https://instagram.com/searchpackers' target='_blank'>https://instagram.com/searchpackers</a></p>\
        <hr>\
        <p class='text-muted'>&copy; 2021 - Searchpackers </p> \
		</div>", frappe.app));

		frappe.ui.misc.about_dialog = d;
	}

	frappe.ui.misc.about_dialog.show();

}
