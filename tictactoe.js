"use strict";
//Bianca Rossetti - 2233420

// Put your DOMContentLoaded event listener here first.

function setup(event)
{

  const winMessage = document.getElementById("message")
  winMessage.style.display = "none";
  let curPlayer = document.getElementById("curplayer").textContent;
  const table = document.getElementsByTagName("table")[0];
  const button = document.getElementById("reset");
  const tdArray = document.getElementsByTagName("td");

  table.addEventListener("click", playTurn);
  button.addEventListener("click", reset);

  function playTurn(event)
  {
    let cell = event.target;
    if (cell.textContent === "X" || cell.textContent === "O" || winMessage.style.display !== "none")
    {
      return;
    }
    else 
    {
      cell.textContent = curPlayer;
      if (curPlayer === "X")
      {
        event.target.classList.add("xsquare");
        curPlayer = "O";
      }
      else
      {
        event.target.classList.add("osquare");
        curPlayer = "X";
      }
      document.getElementById("curplayer").textContent = curPlayer;

      const positions = [];
      for (let i = 0; i < tdArray.length; ++i)
      {
        if (tdArray[i].classList.value === "xsquare")
        {
          positions[i] = "X";
        }
        else if (tdArray[i].classList.value === "osquare")
        {
          positions[i] = "O";
        }
        else
        {
          positions[i] = false;
        }
      }

      let results = checkBoard(...positions);
      if (results)
      {
        showWinningMessage(results);
      }
    }
  }

  function showWinningMessage(winner)
  {
    document.getElementById("winningplayer").textContent = winner;
    winMessage.style.display = "block";
  }

  function reset(event)
  {
    for (let i = 0; i < tdArray.length; ++i)
    {
      tdArray[i].textContent = null;
      tdArray[i].classList.remove("osquare", "xsquare");
    }

    winMessage.style.display = "none";
  }


}

document.addEventListener("DOMContentLoaded", setup);