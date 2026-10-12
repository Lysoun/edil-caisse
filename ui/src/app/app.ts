import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {apiHttpResource} from './api-http-resource';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('edil-caisse');
  public readonly serverConnectionTestResource = apiHttpResource('json/kotlinx-serialization');
}
