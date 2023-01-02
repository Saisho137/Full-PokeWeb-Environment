package com.example.pokeweb.pokeApi;

import retrofit2.Call;

import com.example.pokeweb.models.Pokemon;

import retrofit2.http.GET;
import retrofit2.http.Path;

public interface PokeApiService {
    @GET("pokemon/{id}")
    Call<Pokemon> getPokemonList(@Path("id") int id);
    //Get whole information one by one with Pokemon id
}
