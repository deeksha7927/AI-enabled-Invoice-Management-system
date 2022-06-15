package com.higradius;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddInvoice
 */
@WebServlet("/AddInvoice")
public class AddInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddInvoice() {
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
		String invoice = null;
		
		try {
			BufferedReader reader = request.getReader();
			invoice = reader.readLine();
			System.out.println(invoice);
//			System.out.println(invoice.getClass().getName());
			
//			System.out.println(invoice.split(","));
//			System.out.println(invoice.split("\"\""));
//			System.out.println(invoice.split(","));
			
			invoice =  invoice.substring(1, invoice.length() - 1);
			String final_values[] = invoice.split(",");
			
			for(int i = 0; i < final_values.length; ++i) {
				final_values[i] = final_values[i].split(":")[1];
				final_values[i] = final_values[i].substring(1, final_values[i].length() - 1);
				System.out.println(final_values[i]);
			}
			
			String business_code = final_values[0];
			String cust_number = final_values[1];
			String clear_date = final_values[2];
			String buisness_year = final_values[3];
//			String dueDate = final_values[4];
//			String notes = final_values[5];
			
			Connection con=DBConnection.createConnect();
			String sql_statement = "INSERT INTO winter_internship (business_code, cust_number, clear_date, buisness_year) values (?, ?, ?, ?)";
			
			PreparedStatement st = con.prepareStatement(sql_statement);
			st.setString(1, business_code);
			st.setString(2, cust_number);
			st.setString(3, clear_date);
			st.setString(4, buisness_year);
//			st.setString(5,  dueDate);
//			st.setString(6, notes);
			
			st.executeUpdate();
//			con.commit();
			con.close();
		}
		catch (IOException e) {
			e.printStackTrace();
		}
		catch (SQLException e) {
			e.printStackTrace();
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	}

}