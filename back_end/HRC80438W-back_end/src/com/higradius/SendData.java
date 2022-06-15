package com.higradius;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class RecieveData
 */
@WebServlet("/SendData")
public class SendData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SendData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		

		//int rowToGet = 10;
		HashMap<Object,Object> Res= new HashMap<Object,Object>();
		ArrayList<Response> datas = new ArrayList<Response>();
		try {
			
			//String pageInURL = request.getParameter("page");
			//int page = Integer.parseInt(pageInURL) * rowToGet; 
			Connection con = DBConnection.createConnect();
			PreparedStatement ps=con.prepareStatement("select * from winter_internship limit 1000");
			ResultSet rs = ps.executeQuery();
			
			//ArrayList<Response> data = new ArrayList<>();
			while(rs.next())
			{
				
				Response inv = new Response(rs.getInt("sl_no"),rs.getString("business_code"),rs.getInt("cust_number"),rs.getString("clear_date"),rs.getInt("buisness_year"),rs.getString("doc_id"),rs.getString("posting_date"),rs.getString("document_create_date"),rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),rs.getInt("posting_id"),rs.getDouble("total_open_amount"),rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),rs.getInt("invoice_id"),rs.getString("aging_bucket"));
				datas.add(inv);
			}
			
			Res.put("datas", datas);
			Gson gson = new GsonBuilder().serializeNulls().create();
			String invoices  = gson.toJson(Res);
			response.setContentType("application/json");
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(invoices);
			rs.close();
			ps.close();
			con.close();
			
		}
		catch(SQLException e) {
			e.printStackTrace();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
