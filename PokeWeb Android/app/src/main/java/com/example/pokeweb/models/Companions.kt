package com.example.pokeweb.models

import com.google.gson.annotations.SerializedName

data class Companions (
    @SerializedName("emailUser") val emailUser: String?
)