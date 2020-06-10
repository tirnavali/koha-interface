import {
  Component,
  OnInit,
  TemplateRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;

  @Output() loginAcquired = new EventEmitter<{
    username: string;
    password: string;
  }>();

  username: '';
  password: '';

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onLogin() {
    this.loginAcquired.emit({
      username: this.username,
      password: this.password,
    });

    console.log(this.username);
  }
}
