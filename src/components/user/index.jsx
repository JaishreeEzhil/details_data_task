/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, Formik, Form } from 'formik';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import GENDERS from '../../GENDERS';
import { setForm } from '../../redux/form';
import { addUser, updateUser } from '../../redux/user';

const userSchema = Yup.object().shape({
  name: Yup.string().matches(/^[aA-zZ\s]+$/).max(25).required(),
  age: Yup.number().min(1).max(95).required(),
  address: Yup.string().matches(/^\w+(?:(?:,\s\w+)+|(?:\s\w+)+)*$/).max(100).required(),
  email: Yup.string().email().required(),
});

const User = () => {
  const { id } = useParams();
  const history = useHistory();
  const ref = useRef();
  const dispatch = useDispatch();
  const currentUser = id
    ? useSelector((state) => state.users.find((user) => user.id === Number(id)))
    : null;

  useEffect(() => {
    dispatch(setForm(ref.current));
    return () => dispatch(setForm(null));
  });

  return (
    <Formik
      innerRef={ref}
      validationSchema={userSchema}
      initialValues={{
        email: currentUser?.email || '',
        name: currentUser?.name || '',
        address: currentUser?.address || '',
        age: currentUser?.age || '',
        gender: currentUser?.gender || GENDERS[0].description,
      }}
      onSubmit={(values) => {
        const user = {
          id: id || Date.now(),
          email: values.email,
          name: values.name,
          address: values.address,
          age: values.age,
          gender: values.gender,
        };
        if (id) {
          dispatch(updateUser(user));
        } else {
          dispatch(addUser(user));
        }
        history.push('/');
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Jane" />
            {errors.name && touched.name ? (
              <div>{errors.name}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <Field id="address" name="address" placeholder="Sesame Street, 10" />
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <Field as="select" id="gender" name="gender">
              {GENDERS.map(
                (gender) => (
                  <option
                    key={gender.id}
                    value={gender.description}
                  >
                    {gender.description}
                  </option>
                ),
              )}
            </Field>
            {errors.gender && touched.gender ? (
              <div>{errors.gender}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor="address">Age</label>
            <Field id="age" name="age" placeholder="Sesame Street, 10" />
            {errors.age && touched.age ? (
              <div>{errors.age}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default User;
