/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  Field,
  Formik,
  Form,
  getIn,
} from 'formik';
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

function getStyles(errors, fieldName) {
  if (getIn(errors, fieldName)) {
    return {
      border: '1px solid red',
    };
  }
  return {};
}

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
    /* eslint-disable */
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
        <div className="min-h-screen bg-gray-100 justify-center sm:py-12">
          <Form className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">User Details</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Enter user details.</p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col text-left">
                      <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="name">Name</label>
                      <Field style={getStyles(errors.name, 'name')} className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" id="name" name="name" placeholder="Name" />
                      {errors.name && touched.name ? (
                        <div>
                          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.name}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="address">Address</label>
                      <Field className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" id="address" name="address" placeholder="Address" />
                      {errors.address && touched.address ? (
                        <div>
                          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.address}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="email">Email</label>
                      <Field
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      />
                      {errors.email && touched.email ? (
                        <div>
                          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.email}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="gender">Gender</label>
                      <Field className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" as="select" id="gender" name="gender">
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
                        <div>
                          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.gender}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col text-left">
                      <label className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600" htmlFor="address">Age</label>
                      <Field className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" id="age" name="age" placeholder="Age" />
                      {errors.age && touched.age ? (
                        <div>
                          <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{errors.age}</span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="pt-4 flex items-center space-x-4">
                    <button className="bg-yellow-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-nonebg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" type="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
    /* eslint-disable */
  );
};

export default User;
