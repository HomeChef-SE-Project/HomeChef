import javax.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;
import java.sql.*;

public class NewServlet extends HttpServlet {
    
    public void service(HttpServletRequest req,HttpServletResponse res) throws IOException,ServletException
    {
        PrintWriter out=res.getWriter();
        
        String username=req.getParameter("t1");
        String password=req.getParameter("t2");
        
       out.println("the entered user name is "+username+" the entered password is"+password);
       out.println("<br>");
       ServletContext con=getServletContext();
       
       Enumeration<String> e =getInitParameterNames();
       out.println(e);
       while(e.hasMoreElements())
       {
           String str=e.nextElement();
           out.println("the parameter name is "+ str);
           out.println("the parameter value is "+con.getInitParameter("str"));
       }
       out.println("<br>");
       ServletConfig config=getServletConfig();
       out.println("the config parametr is "+ con.getInitParameter("bharadwaj"));
       
        
        
        
        out.println("Hi");
        
    
    try{
    Class.forName("oracle.jdbc.driver.OracleDriver");
   Connection conn=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","system");
   PreparedStatement stmt=conn.prepareStatement("select * from sai;");
   ResultSet rs=stmt.executeQuery();
   while(rs.next())
   {
       out.println("the name is "+ rs.getString(1));
   }
   
   out.println("in database");
   
   
}
    catch(Exception el)
    {
        System.out.println(el);
    }

    }
}