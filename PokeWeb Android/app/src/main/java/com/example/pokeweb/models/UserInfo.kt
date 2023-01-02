package com.example.pokeweb.models

import com.google.gson.annotations.SerializedName

data class UserInfo (
    @SerializedName("emailUser") val emailUser: String?,
    @SerializedName("userPassword") val userPassword: String?
)