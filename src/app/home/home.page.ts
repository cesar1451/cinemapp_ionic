import { PeliculasService } from './../api/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  peliculas = [];/*
    {
      titulo: "Siempre a tu lado, Hachiko",
      anio: 2009, 
      director: "Manuel keepler", 
      imagen: "https://lamenteesmaravillosa.com/wp-content/uploads/2014/02/Hachiko.jpg"
    },
    {
      titulo: "Chappie",
      anio: 2015, 
      director: "Neill Blomkamp", 
      imagen: "https://img.ecartelera.com/noticias/fotos/21500/21547/1.jpg"
    }
  ];*/
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(){
    this.peliculasService.peliculas.subscribe(peliculas => {   //=> Función lambda, variable observador
      this.peliculas = peliculas;
    });
    //this.peliculasService.getPeliculas();
  }
  
}
