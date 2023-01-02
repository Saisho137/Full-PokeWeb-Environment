package com.example.pokeweb.models

import com.google.gson.annotations.Expose
import com.google.gson.annotations.SerializedName
import java.util.ArrayList

data class CompanionsResponse (
    @SerializedName("idCompanion") val idCompanion: ArrayList<Int>?
)