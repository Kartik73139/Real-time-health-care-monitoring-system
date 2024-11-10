import java.io.IOException;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;
import com.google.gson.Gson;

@WebServlet("/PatientServlet")
public class PatientServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String body = request.getReader().lines().reduce("", String::concat);
        Patient patient = new Gson().fromJson(body, Patient.class);

        try (Connection con = DBConnection.getConnection()) {
            String query = "INSERT INTO patients (first_name, last_name, date_of_birth, gender, contact_number) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement ps = con.prepareStatement(query);
            ps.setString(1, patient.getFirstName());
            ps.setString(2, patient.getLastName());
            ps.setDate(3, Date.valueOf(patient.getDob()));
            ps.setString(4, patient.getGender());
            ps.setString(5, patient.getContact());
            ps.executeUpdate();
            response.setStatus(HttpServletResponse.SC_OK);
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
    }
}

class Patient {
    private String firstName;
    private String lastName;
    private String dob;
    private String gender;
    private String contact;

    // Getters and setters
}
