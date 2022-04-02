function set_date(){
    let today=new Date();
    let wedding_date = new Date('2022-07-02');
    let days_left = Math.ceil((wedding_date - today) / (1000*60*60*24));
    document.getElementById("days_left").textContent=days_left
  }

  function toggle_past_separate(){
    let old_scrollTop = document.documentElement.scrollTop
    let old_height = document.documentElement.scrollHeight

    let timeline = document.getElementById("timeline-past-separate")
    if (timeline.style.display === "none") {
      timeline.style.display = "block"
    } else {
      timeline.style.display = "none"
    }
    let new_height = document.documentElement.scrollHeight;
    // console.log(old_scrollTop, old_height, new_height)
    window.scrollTo(0, old_scrollTop + (new_height - old_height))
  }

  function toggle_past_together(){
    let old_scrollTop = document.documentElement.scrollTop
    let old_height = document.documentElement.scrollHeight

    let prev_button = document.getElementById("button-toggle-past-separate")
    let prev_timeline = document.getElementById("timeline-past-separate")
    let timeline = document.getElementById("timeline-past-together")
    if (timeline.style.display === "none") {
      timeline.style.display = "block"
      prev_button.style.display = "block"
    } else {
      timeline.style.display = "none"
      prev_button.style.display = "none"
      prev_timeline.style.display = "none"
    }
    let new_height = document.documentElement.scrollHeight;
    // console.log(old_scrollTop, old_height, new_height)
    window.scrollTo(0, old_scrollTop + (new_height - old_height))
  }