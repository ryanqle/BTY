require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Workout = require('./models/workout');
const User = require('./models/user')
const Session = require('./models/session');
const FitnessLog = require('./models/fitnesslog');
const Exercise = require('./models/exercise');

(async function() {

    await User.deleteMany({});
    await Session.deleteMany({});
    await FitnessLog.deleteMany({});
    await Exercise.deleteMany({});

    await Category.deleteMany({});
    const categories = await Category.create([
      {categoryName: 'Abs', sortOrder: 10},
      {categoryName: 'Chest', sortOrder: 20},
      {categoryName: 'Back', sortOrder: 30},
      {categoryName: 'Shoulder', sortOrder: 40},
      {categoryName: 'Legs', sortOrder: 50},
      {categoryName: 'Arms', sortOrder: 60}
    ]);
  
    await Workout.deleteMany({});
    const workouts = await Workout.create([
      {exerciseName: 'Seated Knee Raises', description: 'Sit upright in your chair, grip the sides with your hands, and lift your knees up to your chest. Lower them back down and repeat.', category: categories[0]},{
      exerciseName: 'Desk Plank', description: 'Place your hands on your desk and walk your feet back until your body is in a straight line. Hold this position for 30-60 seconds, keeping your core tight.', category: categories[0]},{
      exerciseName: 'Russian Twists', description: 'Sit on the edge of your chair with your feet flat on the ground. Lean back slightly and twist your torso to the right, then to the left, tapping your hand on the seat of the chair.', category: categories[0]},{
      exerciseName: 'Desk Push-ups', description: 'Stand a few steps away from your desk, place your hands on the edge of the desk, and do push-ups.', category: categories[1]},{
      exerciseName: 'Chair Dips', description: 'Sit on the edge of your chair with your hands gripping the edge of the seat. Walk your feet out and lower yourself down until your arms are at a 90-degree angle. Push yourself back up and repeat.', category: categories[1]},{
      exerciseName: 'Chest Squeeze', description: 'Hold a small ball or a rolled-up towel between your hands, with your arms extended in front of you. Squeeze the ball or towel with your chest muscles and hold for 5-10 seconds.', category: categories[1]},{
      exerciseName: 'Seated Rows', description: 'Sit on the edge of your chair with your feet flat on the ground. Hold a water bottle or other weight in each hand, with your arms extended in front of you. Pull the weights back towards your chest, squeezing your shoulder blades together. Lower the weights back down and repeat.', category: categories[2]},{
      exerciseName: 'Back Extensions', description: 'Stand behind your chair and hold onto the backrest for support. Lift one leg back behind you while simultaneously lifting the opposite arm forward.', category: categories[2]},{
      exerciseName: 'Seated Twists', description: 'Sit tall in your chair and place your hands behind your head. Twist your torso to the right, then back to center, then to the left. Repeat for several reps.', category: categories[2]},{
      exerciseName: 'Desk Shoulder Press', description: 'Sit on the edge of your chair with your feet flat on the ground. Hold a water bottle or other weight in each hand, with your arms bent at a 90-degree angle. Press the weights up overhead and then lower them back down to shoulder height.', category: categories[3]},{
      exerciseName: 'Lateral Raises', description: 'Sit on the edge of your chair with your feet flat on the ground. Hold a water bottle or other weight in each hand, with your arms down by your sides. Raise your arms out to the sides until they are parallel with the ground, then lower them back down.', category: categories[3]},{
      exerciseName: 'Shoulder Shrugs', description: 'Sit on the edge of your chair with your feet flat on the ground. Hold a water bottle or other weight in each hand, with your arms down by your sides. Shrug your shoulders up towards your ears and then lower them back down.', category: categories[3]},{
      exerciseName: 'Chair Squats', description: 'Stand in front of your chair with your feet shoulder-width apart. Bend your knees and lower yourself down towards the chair as if you are going to sit, but stop just before you touch the seat. Push yourself back up and repeat.', category: categories[4]},{
      exerciseName: 'Calf Raises', description: 'Stand behind your chair and hold onto the backrest for support. Rise up onto your toes and then lower your heels back down. ', category: categories[4]},{
      exerciseName: 'Leg Extensions', description: 'Sit in your chair with your feet flat on the ground. Lift one leg up and straighten it out in front of you, then lower it back down.', category: categories[4]},{
      exerciseName: 'Diamond push-ups', description: 'Start in a push-up position, but with your hands close together under your chest, forming a diamond shape with your thumbs and index fingers. Lower yourself down to the ground and push back up.', category: categories[5]},{
      exerciseName: 'Towel curls', description: 'Hold a towel in both hands and place it behind your back, with one end in each hand. Keeping your elbows close to your sides, curl the towel up towards your shoulders, then lower it back down.', category: categories[5]},{
      exerciseName: 'Wall handstands', description: 'Stand facing a wall and place your hands on the ground, shoulder-width apart. Walk your feet up the wall behind you until your body is in a straight line from head to heels. Hold for a few seconds, then walk your feet back down the wall.', category: categories[5]}
    ]);
    console.log(workouts)
  
    process.exit();
  
  })();