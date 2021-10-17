import { Component, OnInit } from '@angular/core';
import { Constants } from './app.constant';
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public tableData: any;
  private url = Constants.userDataUrl;
  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.getUserData();
  }
  public getUserData() {

    this.http.get(this.url).subscribe((res) => {
      this.tableData = res;
    });
  }
}
