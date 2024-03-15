import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() vitrine :boolean =true;
  @Input() enablemodification:boolean=false;
  @Input() login :boolean =true;
  @Input() modificationwiki:boolean=false;
  @Output() saveversionwikinow = new EventEmitter();
  savewiki()
  {
      this.saveversionwikinow.emit("save wiki now");
  }
}
