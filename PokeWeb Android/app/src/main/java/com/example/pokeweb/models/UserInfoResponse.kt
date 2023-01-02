package com.example.pokeweb.models

import com.google.gson.annotations.SerializedName

data class UserInfoResponse (
    @SerializedName("confirmation") val confirmation: Boolean?
)