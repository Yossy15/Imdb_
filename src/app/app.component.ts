import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,           // เพิ่ม standalone
  imports: [RouterOutlet],    // import สำหรับ RouterOutlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // แก้จาก styleUrl → styleUrls
})
export class AppComponent {
  title = 'my-movie-hub';
}
