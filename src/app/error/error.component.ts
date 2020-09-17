import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  title = 'Error';
  message = 'Se ha producido un error inesperado.';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('data', this.route.snapshot.data);
    const code = this.route.snapshot.data['code'];
    if (code === 404) {
      this.title = 'Error 404';
      this.message = 'Página no encontrada.';
    }
  }
}
