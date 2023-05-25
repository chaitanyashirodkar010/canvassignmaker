import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaceArts } from 'src/app/constants/constants';

@Component({
  selector: 'app-text-art-filter',
  templateUrl: './text-art-filter.component.html',
  styleUrls: ['./text-art-filter.component.scss']
})

export class TextArtFilterComponent {
  @Input() selectedObject: fabric.Object | undefined;
  @Output() textArtEmitter = new EventEmitter<any>();
  faceArtList: any;
  @Input() isNewArt: boolean = false;
  
  ngOnInit(){
    // if(this.selectedObject){
    //   this.isCurrent = true;
    // }
    this.faceArtList = FaceArts.faceArt[0].facearts;
  }

  AddImage(art: any){
    let param = {
      isNewArt: true,
      art: art
    };
    this.textArtEmitter.emit(param);
  }

  formatLabel(value: any): string {
    return `${value}`;
  }

  onInputChange(event: any){
  if(this.textArtEmitter)
      this.textArtEmitter.emit({opacity: event.target.value});
}

  getUrl(url: string){
    return  "https://storage.googleapis.com/signmonkey-148101.appspot.com/"+ url;
  }

}
