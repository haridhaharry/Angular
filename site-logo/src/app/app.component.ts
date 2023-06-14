import { Component } from '@angular/core';
import { ThemeProps } from './type';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-logo';
  services:string[] = ["About"]
  themes:string[] = ["dark" , "light", " blue " ," darkred" ]
  themeStyles:ThemeProps[]= [
     {backgroundColor:"#2E4053",color: "whitesmoke"},
     {backgroundColor:"#D7DBDD", color: "#2E4053"},
     {backgroundColor:"#2E86C1 ", color: "#F7F9F9"},
     {backgroundColor:"#CB4335", color: "#F7F9F9"}
  ]
  currentTheme:ThemeProps = this.themeStyles[0]
}