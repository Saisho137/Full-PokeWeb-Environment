package com.example.pokeweb.pokeApi

import com.example.pokeweb.models.Companions
import com.example.pokeweb.models.CompanionsResponse
import com.example.pokeweb.models.UserInfo
import com.example.pokeweb.models.UserInfoResponse
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.POST

interface MyApiService {
    @POST("confirmarUsuario")
    fun confirmUser(@Body userData: UserInfo): Call<UserInfoResponse>
    //Send Request Body with UserInfo Package, Receive a Response with UserInfoResponse Package
    @POST("registrarUsuario")
    fun registerUser(@Body userData: UserInfo): Call<UserInfoResponse>
    //Send Request Body with UserInfo Package, Receive a Response with UserInfoResponse Package
    @POST("requestCompanion")
    fun requestCompanion(@Body userData: Companions): Call<CompanionsResponse>
    //Send Request Body with Companions Package, Receive a Response with CompanionsResponse Package
}