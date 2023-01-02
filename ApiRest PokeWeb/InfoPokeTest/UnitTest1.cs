using capaNegocioApi;
using System.Collections;

namespace InfoPokeTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestConsultarUsuarioBetaDanna()
        {
            bool confirm = infoPoke.ConsultarUsuario("beta","danna");
            Assert.AreEqual(true, confirm);
        }
        [TestMethod]
        public void TestConsultarUsuarioSantiagoCompu()
        {
            bool confirm = infoPoke.ConsultarUsuario("santiago","compu");
            Assert.AreEqual(false, confirm);
        }
        [TestMethod]
        public void TestRegistrarUsuarioPruebasPruebas()
        {
            bool confirm = infoPoke.RegistrarUsuario("pruebas3","pruebas3");
            Assert.AreEqual(true, confirm);
        }
        [TestMethod]
        public void TestRegistrarUsuarioPrueba2Prueba2()
        {
            bool confirm = infoPoke.ConsultarUsuario("prueba2", "prueba2");
            Assert.AreEqual(false, confirm);
        }
        [TestMethod]
        public void TestRegistrarCompanionSierraTrue()
        {
            bool confirm = infoPoke.RegistrarCompanion(890, "sierra");
            Assert.AreEqual(true, confirm);
        }
        [TestMethod]
        public void TestRequestCompanionMateoTrue()
        {
            List<int> list = new List<int> { 1, 7 };
            List<int> confirm = infoPoke.RequestCompanion("mateo");
            Assert.AreEqual(list[0], confirm[0]);
        }
        [TestMethod]
        public void TestRequestCompanionMateoFalse()
        {
            List<int> list = new List<int> { 2, 6 };
            List<int> confirm = infoPoke.RequestCompanion("mateo");
            Assert.AreNotEqual(list, confirm);
        }
    }
}