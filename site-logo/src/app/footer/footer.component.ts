import { Component, Input } from '@angular/core';
import { ThemeProps } from '../type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
@Input("ftheme") footertheme:ThemeProps = {backgroundColor:"",color:""}
}