package com.higradius;

public class Winter {
	private int sl_no;
	private String business_code;
	private String cust_number;
	private String clear_date;
	private int buisness_year;
	private String doc_id;
	private String posting_date;
	private String document_create_date;
	private String document_create_date1;
	private String due_in_date;
	private String invoice_currency;
	private String document_type;
	private int posting_id;
	private String area_business;
	private double total_open_amount;
	private String baseline_create_date;
	private String cust_payment_terms;
	public Winter(int sl_no, String business_code, String cust_number, String clear_date, int buisness_year,
			String doc_id, String posting_date, String document_create_date, String document_create_date1,
			String due_in_date, String invoice_currency, String document_type, int posting_id, String area_business,
			double total_open_amount, String baseline_create_date, String cust_payment_terms, int invoice_id,
			int isOpen, String aging_bucket, int is_deleted) {
		super();
		this.sl_no = sl_no;
		this.business_code = business_code;
		this.cust_number = cust_number;
		this.clear_date = clear_date;
		this.buisness_year = buisness_year;
		this.doc_id = doc_id;
		this.posting_date = posting_date;
		this.document_create_date = document_create_date;
		this.document_create_date1 = document_create_date1;
		this.due_in_date = due_in_date;
		this.invoice_currency = invoice_currency;
		this.document_type = document_type;
		this.posting_id = posting_id;
		this.area_business = area_business;
		this.total_open_amount = total_open_amount;
		this.baseline_create_date = baseline_create_date;
		this.cust_payment_terms = cust_payment_terms;
		this.invoice_id = invoice_id;
		this.isOpen = isOpen;
		this.aging_bucket = aging_bucket;
		this.is_deleted = is_deleted;
	}
	private int invoice_id;
	private int isOpen;
	private String aging_bucket;
	private int is_deleted;
	
	/* @return the sl_no
*/
	public int getSl_no() {
		return sl_no;
	}
	/**
	 * @param sl_no the sl_no to set
	 */
	public void setSl_no(int sl_no) {
		this.sl_no = sl_no;
	}
	/**
	 * @return the business_code
	 */
	public String getBusiness_code() {
		return business_code;
	}
	/**
	 * @param business_code the business_code to set
	 */
	public void setBusiness_code(String business_code) {
		this.business_code = business_code;
	}
	/**
	 * @return the cust_number
	 */
	public String getCust_number() {
		return cust_number;
	}
	/**
	 * @param cust_number the cust_number to set
	 */
	public void setCust_number(String cust_number) {
		this.cust_number = cust_number;
	}
	/**
	 * @return the clear_date
	 */
	public String getClear_date() {
		return clear_date;
	}
	/**
	 * @param clear_date the clear_date to set
	 */
	public void setClear_date(String clear_date) {
		this.clear_date = clear_date;
	}
	/**
	 * @return the buisness_year
	 */
	public int getBuisness_year() {
		return buisness_year;
	}
	/**
	 * @param buisness_year the buisness_year to set
	 */
	public void setBuisness_year(int buisness_year) {
		this.buisness_year = buisness_year;
	}
	/**
	 * @return the doc_id
	 */
	public String getDoc_id() {
		return doc_id;
	}
	/**
	 * @param doc_id the doc_id to set
	 */
	public void setDoc_id(String doc_id) {
		this.doc_id = doc_id;
	}
	/**
	 * @return the posting_date
	 */
	public String getPosting_date() {
		return posting_date;
	}
	/**
	 * @param posting_date the posting_date to set
	 */
	public void setPosting_date(String posting_date) {
		this.posting_date = posting_date;
	}
	/**
	 * @return the document_create_date
	 */
	public String getDocument_create_date() {
		return document_create_date;
	}
	/**
	 * @param document_create_date the document_create_date to set
	 */
	public void setDocument_create_date(String document_create_date) {
		this.document_create_date = document_create_date;
	}
	/**
	 * @return the document_create_date1
	 */
	public String getDocument_create_date1() {
		return document_create_date1;
	}
	/**
	 * @param document_create_date1 the document_create_date1 to set
	 */
	public void setDocument_create_date1(String document_create_date1) {
		this.document_create_date1 = document_create_date1;
	}
	/**
	 * @return the due_in_date
	 */
	public String getDue_in_date() {
		return due_in_date;
	}
	/**
	 * @param due_in_date the due_in_date to set
	 */
	public void setDue_in_date(String due_in_date) {
		this.due_in_date = due_in_date;
	}
	/**
	 * @return the invoice_currency
	 */
	public String getInvoice_currency() {
		return invoice_currency;
	}
	/**
	 * @param invoice_currency the invoice_currency to set
	 */
	public void setInvoice_currency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}
	/**
	 * @return the document_type
	 */
	public String getDocument_type() {
		return document_type;
	}
	/**
	 * @param document_type the document_type to set
	 */
	public void setDocument_type(String document_type) {
		this.document_type = document_type;
	}
	/**
	 * @return the posting_id
	 */
	public int getPosting_id() {
		return posting_id;
	}
	/**
	 * @param posting_id the posting_id to set
	 */
	public void setPosting_id(int posting_id) {
		this.posting_id = posting_id;
	}
	/**
	 * @return the area_business
	 */
	public String getArea_business() {
		return area_business;
	}
	/**
	 * @param area_business the area_business to set
	 */
	public void setArea_business(String area_business) {
		this.area_business = area_business;
	}
	/**
	 * @return the total_open_amount
	 */
	public double getTotal_open_amount() {
		return total_open_amount;
	}
	/**
	 * @param total_open_amount the total_open_amount to set
	 */
	public void setTotal_open_amount(double total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	/**
	 * @return the baseline_create_date
	 */
	public String getBaseline_create_date() {
		return baseline_create_date;
	}
	/**
	 * @param baseline_create_date the baseline_create_date to set
	 */
	public void setBaseline_create_date(String baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}
	/**
	 * @return the cust_payment_terms
	 */
	public String getCust_payment_terms() {
		return cust_payment_terms;
	}
	/**
	 * @param cust_payment_terms the cust_payment_terms to set
	 */
	public void setCust_payment_terms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}
	/**
	 * @return the invoice_id
	 */
	public int getInvoice_id() {
		return invoice_id;
	}
	/**
	 * @param invoice_id the invoice_id to set
	 */
	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}
	/**
	 * @return the isOpen
	 */
	public int getIsOpen() {
		return isOpen;
	}
	/**
	 * @param isOpen the isOpen to set
	 */
	public void setIsOpen(int isOpen) {
		this.isOpen = isOpen;
	}
	/**
	 * @return the aging_bucket
	 */
	public String getAging_bucket() {
		return aging_bucket;
	}
	/**
	 * @param aging_bucket the aging_bucket to set
	 */
	public void setAging_bucket(String aging_bucket) {
		this.aging_bucket = aging_bucket;
	}
	/**
	 * @return the is_deleted
	 */
	public int getIs_deleted() {
		return is_deleted;
	}
	/**
	 * @param is_deleted the is_deleted to set
	 */
	public void setIs_deleted(int is_deleted) {
		this.is_deleted = is_deleted;
	}
	
}
