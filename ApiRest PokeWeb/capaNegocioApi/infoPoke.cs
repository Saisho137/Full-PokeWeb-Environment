using capaAccesoDBApi;


namespace capaNegocioApi
{
    public class infoPoke
    {
        public static bool RegistrarUsuario(string email, string pass)
        {
            AccesoDB acceso = new AccesoDB();
            return acceso.RegistrarUsuarioDB(email, pass);
        }

        public static bool ConsultarUsuario(string email, string pass)
        {
            AccesoDB acceso = new AccesoDB();
            return acceso.ConsultarUsuarioDB(email, pass);
        }

        public static bool RegistrarCompanion(int idPoke, string email)
        {
            AccesoDB acceso = new AccesoDB();
            return acceso.RegistrarPokemon( idPoke, email);
        }

        public static List<int> RequestCompanion(string email)
        {
            AccesoDB acceso = new AccesoDB();
            return acceso.ConsultarPokemon(email);
        }
    }
}