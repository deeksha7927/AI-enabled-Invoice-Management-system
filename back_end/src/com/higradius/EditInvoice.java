package com.higradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class EditInvoice
 */
@WebServlet("/EditInvoice")
public class EditInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EditInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	//	doGet(request, response);
		try {
			int i=0;
			String invoice_currency = request.getParameter("invoice_currency");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			String slno = request.getParameter("sl_no");
			int sl_no = Integer.parseInt(slno);
		
		
		Connection con = DBConnection.createConnect();
		String query = "UPDATE winter_internship SET invoice_currency = ? ,cust_payment_terms = ? WHERE sl_no = ?";
		
		PreparedStatement st = con.prepareStatement(query);
		st.setString(1, invoice_currency);
		st.setString(2, cust_payment_terms);
		st.setInt(3, sl_no);
		i=st.executeUpdate();
		if(i>0)
		{
			System.out.print("Data updated successfully");
		}
		else
		{
			System.out.print("Data not updated");
		}
		con.close();
	}
	
	catch(Exception e) {
		
	}
	}

}
