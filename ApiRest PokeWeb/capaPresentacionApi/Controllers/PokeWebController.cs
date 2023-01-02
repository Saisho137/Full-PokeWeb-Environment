using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using capaNegocioApi;
using capaPresentacionApi.Models;

namespace capaPresentacionApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PokeWebController : ControllerBase
    {
        [HttpPost]
        [Route("api/registrarUsuario")]
        public responseLogin RegistrarUsuario([FromBody] requestLogin peticion)
        {
            responseLogin result = new responseLogin();
            result.confirmation = infoPoke.RegistrarUsuario(peticion.emailUser, peticion.userPassword);
            return result;
        }
        [HttpPost]
        [Route("api/confirmarUsuario")]
        public responseLogin ConfirmarUsuario([FromBody] requestLogin peticion)
        {
            responseLogin result = new responseLogin();
            result.confirmation = infoPoke.ConsultarUsuario(peticion.emailUser, peticion.userPassword);
            return result;
        }
        [HttpPost]
        [Route("api/registrarCompanion")]
        public ResponseCompanionRegister RegistrarCompanion([FromBody] RequestCompanionRegister peticion)
        {
            ResponseCompanionRegister result = new ResponseCompanionRegister();
            result.confirmation = infoPoke.RegistrarCompanion(peticion.idPokemon, peticion.emailUser);
            return result;
        }
        [HttpPost]
        [Route("api/requestCompanion")]
        public responseCompanion RequestCompanion([FromBody] requestCompanion peticion)
        {
            responseCompanion result = new responseCompanion();
            result.idCompanion = infoPoke.RequestCompanion(peticion.emailUser);
            return result;
        }
    }
}
