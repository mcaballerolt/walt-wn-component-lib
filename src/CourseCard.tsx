import { Box, Button, Chip, LinearProgress, Rating, Stack, Typography, useTheme } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

export type Resource = {
  id: number;
  name: string;
}

export type Level = {
  id: number;
  name: string;
}

export type Language = {
  id: number;
  name: string;
}

export type CertificateTemplate = {
  id: number;
  name: string;
}

export type RelatedTopic = {
  id: number;
  name: string;
}

export type Course = {
  id: number;
  name: string;
  general: string;
  about_the_course: string;
  what_you_will_learn: string;
  logo: string | null;
  banner: string | null;
  study_time: number;
  practice_time: number;
  languages_id: number;
  prerequisites: string;
  providers_id: number;
  resources_id: Resource[];
  levels_id: number;
  level: Level,
  language: Language;
  tests_id: number;
  certificate: boolean;
  is_private: boolean;
  payment_required: boolean;
  amount: number;
  instructors_id: number[][];
  customer_id: number;
  is_active: boolean;
  status_id: number;
  category_id: number;
  is_deleted: boolean;
  topics_id: number[];
  created_at: number;
  certificate_template: CertificateTemplate | null;
  related_topics: RelatedTopic[];
  courses_topics: any[];
  syllabus: string;
  enrolled_users: number;
  course_rates: number;
  is_enrolled: boolean;
  progress: number;
  study_time_format: string;
  study_time_2_format: string;
};

interface CourseCardProps {
  minWidth?: string
  course: Course
  onButtonClick?: () => void
}

const CourseCard = ({ course, onButtonClick }: CourseCardProps) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        width: '100%',
        minWidth: { xs: '100%' },
        backgroundColor: theme.palette.background.paper,
        borderRadius: '12px',
        position: 'relative',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.25)'
      }}
    >
      <Box
        sx={{
          height: '60px',
          backgroundColor: course?.banner ? 'transparent' : 'rgba(50, 50, 50, 0.8)',
          backgroundImage: course?.banner ? `url(${course.banner})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '12px 12px 0 0'
        }}
      />
      <Stack spacing={2} padding={4} mt={8}>
        <Stack direction='row' spacing={2} justifyContent='space-between' alignItems='center'>
          <Typography
            variant='h6'
            fontWeight={500}
            sx={{
              height: '48px',
              lineHeight: '24.2px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {course?.name}
          </Typography>
          {course?.is_private && <Chip variant='outlined' color='info' label='Private' />}
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Typography fontSize='14px'>{course?.study_time_2_format}</Typography>
          <CircleIcon style={{ fontSize: '4px' }} />
          <Typography fontSize='14px'>{course?.level?.name}</Typography>
          <CircleIcon style={{ fontSize: '4px' }} />
          <Typography fontSize='14px'>{course?.enrolled_users ?? 0} Students</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography fontSize='14px'>{course?.course_rates}</Typography>
            <Rating
              readOnly
              size='small'
              defaultValue={course?.course_rates}
              value={course?.course_rates}
              precision={1}
            />
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={4}>
          <Box width='100%'>
            <LinearProgress variant='determinate' value={course?.progress} color='primary' />
          </Box>
          <Typography fontSize='14px'>{course?.progress}%</Typography>
        </Stack>
        <Stack>
          <Button onClick={onButtonClick} variant='outlined' fullWidth>
            {course?.is_enrolled ? 'Continue Course' : 'See Course'}
          </Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '16px',
          transform: 'translateY(-45%)',
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          background: `rgba(255, 255, 255, 1) no-repeat center/contain url(${course?.logo})`,
          border: '5px solid rgba(35, 38, 39, 1)'
        }}
      ></Box>
    </Stack>
  )
}

export { CourseCard }
