import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import genres from '/Users/karthikrao/Desktop/movies-app/src/common/Data/genre.js';
import artists from '/Users/karthikrao/Desktop/movies-app/src/common/Data/artists.js';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

export default function FilterCard() {
    const label = { inputProps: { 'aria-label': 'Checkbox' } };
    const [genre, setGenre] = React.useState('');
    const [artist, setArtist] = React.useState('');
    const [date, setDate] = React.useState('');
    
    const [dateEnd, setDateEnd] = React.useState('');


    const handleChange = (event) => {
      setGenre(event.target.value);
    };
    const handleChangeTwo = (event) => {
        setArtist(event.target.value);
      };
    const handleChangeThree = (event) => {
        setDate(event.target.value);
      };
    const endDateHandler = (event) => {
      setDateEnd(event.target.value);
    };

  return (
    <Card sx={{ minWidth: "100%" }}>
      <CardContent>
       <div>
           <h3>FIND MOVIES BY:</h3>
           <form action="#">
           <TextField fullWidth id="standard-basic" label="Movie Name" variant="standard" />
           <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={genre}
          onChange={handleChange}
          label="Genre"
        >

{genres.map((genre) => {
       return(<MenuItem key={genre.id} value={genre.id}><Checkbox key={genre.id} {...label} /> {genre.name}</MenuItem>);
        })};
        </Select>
      </FormControl>
      
      <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Artists</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={artist}
          onChange={handleChangeTwo}
          label="Artists"
        >

{artists.map((artist) => {
       return(<MenuItem key={artist.id} value={artist.id}><Checkbox key={artist.id} {...label} /> {artist.first_name + " " + artist.last_name}</MenuItem>);
        })};
        </Select>
      </FormControl>
      <InputLabel className="datePicker-label"
          shrink
        >
          Release Date Start
        </InputLabel>
        <TextField
          fullWidth
          type="date"
          value={date}
          shrink={true}
          onChange={handleChangeThree}
          variant="standard"
        />

<InputLabel className="datePicker-label"
          shrink
        >
          Release Date End
        </InputLabel>
        <TextField
          fullWidth
          type="date"
          value={dateEnd}
          shrink={true}
          onChange={endDateHandler}
          variant="standard"
        />

           </form>
       </div>
       <CardActions>
      <Button id="apply-btn-filters" fullWidth variant="contained">APPLY</Button>
      </CardActions>
      </CardContent>
 
    </Card>
  );
}



// document.getElementById('apply-btn-filters').onclick(() => {
//     alert("Filtered");
//    });