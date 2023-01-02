package com.example.pokeweb

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.example.pokeweb.models.UserInfo
import com.example.pokeweb.models.UserInfoResponse
import com.example.pokeweb.pokeApi.MyApiService
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class Register : AppCompatActivity() {

    private val retrofit = Retrofit.Builder()
        .baseUrl("https://31b3-2800-e2-280-a76-680b-4119-6d5-457c.ngrok.io/api/PokeWeb/api/")
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    private val service: MyApiService = retrofit.create(MyApiService::class.java)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        //Buttons
        val goSignIn = findViewById<Button>(R.id.btnSignReg)
        val userRegister = findViewById<Button>(R.id.btnRegistReg)

        //EditText
        val emailTb = findViewById<EditText>(R.id.tbEmailReg)//EditText variable
        val passTb = findViewById<EditText>(R.id.tbPassReg)//EditText variable
        val passTbConfirm = findViewById<EditText>(R.id.tbPassConfirmReg)//EditText variable

        //Buttons Functions
        goSignIn.setOnClickListener{
            startActivity(Intent(this,MainActivity::class.java))
        }
        //ApiRest
        userRegister.setOnClickListener{

            //Getting EditText Content
            val email: String = emailTb.text.toString()//Text email String
            val pass: String = passTb.text.toString()//Text password String
            val passConfirm: String = passTbConfirm.text.toString()//Text password 2 String

            //Validations
            if( email.isEmpty() ){
                emailTb.error = "Email required"
                return@setOnClickListener }

            if( pass.isEmpty() ){
                passTb.error = "Password required"
                return@setOnClickListener }

            if (pass != passConfirm){
                passTb.error = ""
                passTbConfirm.error = "Passwords Doesn't Match!"
                return@setOnClickListener }

            //Log.i("TEST","content text typed: $email & $pass")
            //Object with typed content
            val userInfo = UserInfo(
                emailUser = email,
                userPassword = pass)
            //
            registerUser(userInfo)
        }
    }//End of OnCreate

    private fun registerUser(userData: UserInfo) {

        val call = service.registerUser(userData)

        call.enqueue(
            object : Callback<UserInfoResponse>
            {
                override fun onResponse(call: Call<UserInfoResponse>, response: Response<UserInfoResponse>) {
                    val confirm = response.body().confirmation
                    Log.i("TEST","content Response: $confirm")
                    if (confirm != null && confirm == true) {
                        startActivity(Intent(this@Register,MainActivity::class.java))//go to PokeCompanion Section
                    } else if (confirm != null && confirm == false){
                        Toast.makeText(this@Register, "The Email and Password you entered Already Exist\n" +
                                "Try to Sing In", Toast.LENGTH_LONG).show()
                    } else  {
                        Log.e("ERROR","OnResponse ${response.errorBody()}")
                    }
                }
                override fun onFailure(call: Call<UserInfoResponse>, t: Throwable) {
                    Log.e("ERROR","DOESN'T WORK")
                    call.cancel()
                }
            }
        )
    }
}