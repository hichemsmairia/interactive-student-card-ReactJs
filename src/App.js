import './index.css';
import React from 'react';
import ImageUploader from 'react-images-upload';
import SignatureCanvas from 'react-signature-canvas'
import SignaturePad from 'react-signature-canvas'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fsm from './img/fsm.jpeg' ;
import Fmdm from './img/fmdm.jpg'
import Fmm from './img/fmm.jpg'
import Fpm from './img/fpm.png'
import Ipeim from './img/ipeim.jpeg'
import Isimm from './img/isimm.jpg'
import Enim from './img/enim.jpg'
import Card_empty from './img/card.jpg'

class Student_card extends React.Component {

  constructor() {
    super()
    this.state = {
      firstname: 'xxxxx xxx',
      secondname: 'xxxxx xxx',
      birthdate: 'xx/xx/19xx',
      cin: 'xxxxxxxx',
      section: 'xxxxx' ,
      school:'xxxxxx' ,
      schoolimg:'',
      checked : false ,
      pictures: [] ,
      trimmedDataURL: null ,
      file: '',
        imagePreviewUrl: ''

    }
    this.sigPad = {}
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  clear  ()  {
    this.sigPad.clear() ;
  }
  trim ()  {
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
  }
  onDrop(picture) {
          this.setState({
              pictures: this.state.pictures.concat(picture)
          });
      }
   handleChange()  {
     switch(this.state.checked ) {
    case  true  :
      this.setState({checked:false}) ;
      break ;
      case false :
      this.setState({checked:true}) ;
      break ;
  }
}
  //Name of Card Owner
  firstnameChange(n) {
    this.setState({
      firstname: n.target.value
    });
  }
  //secondname
  secondnameChange(n) {
    this.setState({
      secondname: n.target.value
    });
  }
  //section change
  sectionChange(n) {
    this.setState({
      section: n.target.value
    });
  }
  //cin Number
  cinChange(c) {
    this.setState({
      cin: c.target.value
    });
  }
  //school
  schoolChange(s) {
    this.setState({
      school:s.target.value
    })
    switch(this.state.school ) {
   case  "fsm"  :
     this.setState({schoolimg:Fsm}) ;
     break ;
     case "enim" :
     this.setState({schoolimg:Enim}) ;
     break ;
     case "fmdm" :
     this.setState({schoolimg:Fmdm}) ;
     break ;
     case "fpm" :
     this.setState({schoolimg:Fpm}) ;
     break ;
     case "ipeim" :
     this.setState({schoolimg:Ipeim}) ;
     break ;
     case "isimm" :
     this.setState({schoolimg:Isimm}) ;
     break ;
     case  "fmm"  :
       this.setState({schoolimg:Fmm}) ;
       break ;
 }

    }

  //Birthday
  birthdayChange(m) {
    this.setState({
     birthdate: m.target.value
    });
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;

    return (
    <Card >
<h3> developed by : Hichem Smairia @copyrights </h3>
<a href="http://github.com/hichemsmairia">my github </a> 
<CardActionArea>
<CardMedia image={this.state.schoolimg} />
<CardContent  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage:`url(${Card_empty})` ,
    "background-repeat": "no-repeat",
    "background-size": "800px 600px",
    width:800,
    height:600


}}>

<Typography variant="body4" color="textPrimary" component="p">

<div style={{position: "relative" ,"text-align": "center" , display:"flex" }}>
<div style={{position:"center"}}>

          <h3>Etablissement Universitaire : {this.state.school}
            <img src={this.state.schoolimg} style={{height:40,width:30}} alt="" />
                      </h3>


        <label> numero du CIN : {this.state.cin} </label>

<div>

<label> section d'etude :

 {this.state.section}

 </label>
</div>



          <label>Etudiant :
            <p>Nom : {this.state.firstname}</p>
            <img src={imagePreviewUrl}  style={{height:120,width:120 , "padding-left":170,"padding-top":0}}/>
            <p>Prenom : {this.state.secondname}</p>
          </label>
          <label> Date de naissance:

          {this.state.birthdate}

          </label>
<div>
          <label> signature :
          <p>
          {this.state.trimmedDataURL
            ? <img
              src={this.state.trimmedDataURL} style={{width:20,height:20}} />
            : null}
            </p>
            </label>
            </div>
            </div>
            </div>
</Typography>
</CardContent>
      </CardActionArea>
      <FormControlLabel
              control={<Switch checked={this.state.checked} onChange={this.handleChange.bind(this)} />}
              label="s'inscrire"
            />
            <Fade in={this.state.checked}>
                <Paper elevation={4} >

<p>
Etablissement Universitaire :
  <input type="text" onBlur={this.schoolChange.bind(this)}/>
</p>
      <label>
      <p>
      Nom
        <input type="text" onChange={this.firstnameChange.bind(this)}/>
        </p>
        </label>
        <label>
        <p>
         Prenom
        <input type="text" onChange={this.secondnameChange.bind(this)}/>
        </p>
      </label>
      <label>
      <p>
      CIN
        <input type="number" maxLength="8" onChange={this.cinChange.bind(this)}/>
        </p>
      </label>

        <label >
        <p>
        Date de naissance

          <input type="date"  onChange={this.birthdayChange.bind(this)} />
</p>
</label>
<label>
<p> Section D'etude :
          <input type="text"  onChange={this.sectionChange.bind(this)} />
</p>
</label>

<div >

<p> dessinez votre signature </p>
  <SignaturePad
          ref={(ref) => { this.sigPad = ref }} />

      <div>
        <button  onClick={this.clear.bind(this)}>
          Effacer
        </button>
        <button  onClick={this.trim.bind(this)}>
          Soumettre la signature
        </button>
      </div>

    </div>
    <p> selectionner votre image </p>

    <div className="previewComponent">
       <form onSubmit={(e)=>this._handleSubmit(e)}>
         <input className="fileInput"
           type="file"
           onChange={(e)=>this._handleImageChange(e)} />
         <button className="submitButton"
           type="submit"
           onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
       </form>
       <div className="imgPreview">
         {$imagePreview}
       </div>
     </div>
<CardActions>
<Button size="medium" color="primary">
          Effectuer l'inscription
        </Button>
        </CardActions>
</Paper>
        </Fade>

      </Card>
      )
  }
}

export default Student_card ;
