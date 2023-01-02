using System.Data.SqlClient;

namespace capaAccesoDBApi
{
    public class AccesoDB
    {
        private SqlConnection conexion;
        public AccesoDB()
        {
            this.conexion = 
            new SqlConnection(@"Password=sa;Persist Security Info=True;User ID=sa;Initial Catalog=PokeDB;Data Source=SANTIAGOPC\SQLEXPRESS");
        }

        public bool RegistrarUsuarioDB(string userEmail, string userPassword)
        {
            try
            {
                conexion.Open();

                string insert = string.Format(
                    "INSERT INTO Users VALUES ('{0}','{1}')",
                    userEmail, userPassword);

                SqlCommand comando = new SqlCommand(insert, conexion);

                int rows = comando.ExecuteNonQuery();

                conexion.Close();

                return rows > 0;

            } catch (Exception ex) {
                return false; 
            }
           
        }

        public bool ConsultarUsuarioDB(string userEmail, string userPassword)
        {
            conexion.Open();

            string select = string.Format(
                "SELECT * FROM Users WHERE userEmail = '{0}' AND userPassword = '{1}'",
                userEmail, userPassword);

            SqlCommand comando = new SqlCommand(select, conexion);

            SqlDataReader dataReader = comando.ExecuteReader();

            RegistroDTO historial = new RegistroDTO();

            while (dataReader.Read())
            {
                historial.userEmail = userEmail;
                historial.userPassword = userPassword;
            }

            conexion.Close();

            if (historial.userEmail != null && historial.userPassword != null)
            {
                return true;
            } 
            return false;

        }
        public bool RegistrarPokemon(int idPokemons, string userEmail)
        {
            try
            {
                conexion.Open();

                string insert = string.Format(
                    "INSERT INTO PokeCompanions VALUES ('{0}','{1}')",
                    userEmail, idPokemons);

                SqlCommand comando = new SqlCommand(insert, conexion);

                int rows = comando.ExecuteNonQuery();

                return rows > 0;

            } catch(Exception ex)
            {
                return false;
            }
            
        }

        public List<int> ConsultarPokemon(string userEmail)
        {
            conexion.Open();

            string select = string.Format(
                "SELECT * FROM PokeCompanions WHERE userEmail = '{0}'",
                userEmail);

            SqlCommand comando = new SqlCommand(select, conexion);

            SqlDataReader dataReader = comando.ExecuteReader();

            RegistroDTO historial = new RegistroDTO();
            List<int> idPokemons = new List<int>();

            while (dataReader.Read())
            {
                historial.userEmail = userEmail;
                idPokemons.Add(int.Parse(dataReader.GetValue(2).ToString()));
            }

            conexion.Close();

            return idPokemons;
        }
    }
}