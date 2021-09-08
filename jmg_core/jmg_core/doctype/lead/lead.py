# Copyright (c) 2021, JMG and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
from frappe.utils import getdate
import frappe

class Lead(Document):
	
	def before_save(self):
	    self.full_name = f'{self.first_name} {self.last_name or ""}'
	    
	@frappe.whitelist()
	def get_linked_doc(self, throw_if_missing=False):
		
		if not frappe.db.exists(self.reference_type, self.reference_name):
			if throw_if_missing:
				frappe.throw('Linked document not found')
			
			return frappe.get_doc(self.reference_type, self.reference_name)
	