import { Exercise } from 'src/exercise/exercise.entity';
import { DataSource } from 'typeorm';

export const seedExercises = async (dataSource: DataSource) => {
    const exerciseRepo = dataSource.getRepository(Exercise);

    const exists = await exerciseRepo.count();
    if (exists > 0) return;

    const exercises = [
        exerciseRepo.create({
            name: 'Air Squat',
            description: 'A bodyweight squat performed without weights.',
            type: 'gymnastics',
            equipment: 'None',
            isBodyweight: true,
        }),
        exerciseRepo.create({
            name: 'Push-Up',
            description: 'Upper body bodyweight exercise for chest and arms.',
            type: 'gymnastics',
            equipment: 'None',
            isBodyweight: true,
        }),
        exerciseRepo.create({
            name: 'Deadlift',
            description: 'Lifting a loaded barbell from the ground to hip level.',
            type: 'weightlifting',
            equipment: 'Barbell',
            isBodyweight: false,
        }),
        exerciseRepo.create({
            name: 'Kettlebell Swing',
            description: 'Explosive hip-driven movement using a kettlebell.',
            type: 'weightlifting',
            equipment: 'Kettlebell',
            isBodyweight: false,
        }),
        exerciseRepo.create({
            name: 'Burpee',
            description: 'Full-body exercise combining squat, push-up, and jump.',
            type: 'metcon',
            equipment: 'None',
            isBodyweight: true,
        }),
        exerciseRepo.create({
            name: 'Box Jump',
            description: 'Jump onto a sturdy box or platform.',
            type: 'gymnastics',
            equipment: 'Box',
            isBodyweight: true,
        }),
        exerciseRepo.create({
            name: 'Wall Ball',
            description: 'Squat and throw a medicine ball to a target on a wall.',
            type: 'metcon',
            equipment: 'Medicine Ball',
            isBodyweight: false,
        }),
        exerciseRepo.create({
            name: 'Pull-Up',
            description: 'Upper body movement pulling body above a bar.',
            type: 'gymnastics',
            equipment: 'Pull-up Bar',
            isBodyweight: true,
        }),
        exerciseRepo.create({
            name: 'Clean & Jerk',
            description: 'Olympic lift: lifting a barbell from ground to overhead.',
            type: 'weightlifting',
            equipment: 'Barbell',
            isBodyweight: false,
        }),
        exerciseRepo.create({
            name: 'Row',
            description: 'Cardio exercise using a rowing machine.',
            type: 'metcon',
            equipment: 'Rowing Machine',
            isBodyweight: false,
        }),
    ];

    await exerciseRepo.save(exercises);
    console.log('✅ Seeded 10 exercises.');
};
