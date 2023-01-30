import { FC, useMemo, useState } from 'react'
import clsx from 'clsx'
import { Link, useParams } from 'react-router-dom'
import { ExerciseCard, ExerciseCardImage, ExerciseCardImageContainer, ExerciseCardTextBodyPart, ExerciseCardTextContainer, ExerciseCardTextEquipment, ExerciseCardTextName, ExerciseCardTextTarget, ExerciseContainer, ExerciseRow, NoData, PagePaginationContainer } from './Exercise.styles'
import type { ExerciseProps, SelectOption } from './index.d'
import { useGetExerciseQuery } from './Exercise.services'
import Loading from 'components/Loading'
import { Container } from 'components/Container'
import PagePagination from 'components/PagePagination'
import { EXERCISE_DETAILS_ROUTE } from 'constants/routes'
import { ExerciseFilter } from './ExerciseFilter'


// TODO: connect this to api
const _TOTAL_ITEM_COUNT = 1327

const Exercise: FC<ExerciseProps> = () => {

	const [itemPerPage, setitemPerPage] = useState(10)
	const [bodyPart, setBodyPart] = useState('')
	const [equipment, setEquipment] = useState('')
	const [apiData, setApiData] = useState({
		bodyPart: '',
		equipment: ''
	})

	const params = useParams()


	const { data: exerciseList, isFetching, isLoading } = useGetExerciseQuery({
		limit: itemPerPage,
		page: params.pageIndex || 1,
		...apiData,
	})

	const onChageItemPerPage = (option: SelectOption) => {
		setitemPerPage(Number(option.value))
	}

	const onChageBodyPart = (option?: SelectOption) => {
		setBodyPart(option?.value || '')
	}

	const onChageEquipment = (option?: SelectOption) => {
		setEquipment(option?.value || '')
	}

	const handleFilter = () => {
		setApiData({ bodyPart, equipment })
	}

	const isExerciseListEmpty = useMemo(() => !isFetching && exerciseList?.length === 0, [exerciseList, isFetching])

	return (
		<>
			<Container>
				{isFetching && <Loading fullScreen centerd />}

				<ExerciseFilter
					pageOption={[10, 51]}
					itemPerPage={itemPerPage}
					onChaageItemPerPage={onChageItemPerPage}
					onChangeBodyPart={onChageBodyPart}
					onChangeEquipment={onChageEquipment}
					hanldeFilterButton={handleFilter}
					bodyPart={bodyPart}
					equipment={equipment}
				/>

				{isExerciseListEmpty && <NoData>
					<p>No Data</p>
				</NoData>}

				<ExerciseContainer isLoading={isFetching}>
					{exerciseList?.map(exercise => (
						<ExerciseCard key={exercise._id}>
							<Link to={`${EXERCISE_DETAILS_ROUTE}/${exercise.id}`} className={clsx(isFetching && 'disabled')}>

								<ExerciseCardImageContainer>
									<ExerciseCardImage loading='lazy' src={exercise.gifUrl} alt={exercise.name} />
								</ExerciseCardImageContainer>

								<ExerciseCardTextContainer>
									<ExerciseRow>
										<span><strong>Neme:</strong></span>&nbsp;
										<ExerciseCardTextName>{exercise.name}</ExerciseCardTextName>
									</ExerciseRow>

									<ExerciseRow>
										<span><strong>Equipment:</strong></span>&nbsp;
										<ExerciseCardTextEquipment>{exercise.equipment}</ExerciseCardTextEquipment>
									</ExerciseRow>

									<ExerciseRow>
										<span><strong>Body Part:</strong></span>&nbsp;
										<ExerciseCardTextBodyPart>{exercise.bodyPart}</ExerciseCardTextBodyPart>
									</ExerciseRow>

									<ExerciseRow>
										<span><strong>Target:</strong></span>&nbsp;
										<ExerciseCardTextTarget>{exercise.target}</ExerciseCardTextTarget>
									</ExerciseRow>
								</ExerciseCardTextContainer>
							</Link>
						</ExerciseCard>
					))}
				</ExerciseContainer>

				{!isLoading && !isExerciseListEmpty && <PagePaginationContainer>
					<PagePagination
						pageRoute='/exercise'
						boundaryCount={5}
						currentPage={Number(params.pageIndex || 1)}
						pageCount={Math.ceil(_TOTAL_ITEM_COUNT / itemPerPage)}
					/>
				</PagePaginationContainer>}
			</Container>
		</>
	)
}

export default Exercise
