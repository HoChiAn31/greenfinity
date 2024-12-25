import { Button, Flex, Input, Modal, Typography } from 'antd';
import { Warning } from '../../components/icon';
import { useState } from 'react';
import { useTheme } from 'antd-style';
import { Color } from 'antd/es/color-picker';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const DeleteAccountPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};
	const modalStyles = {
		header: {
			textAlign: 'center' as 'center',
		},
		title: {
			color: '#f5222d',
		},
		footer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			gap: '20px',
		},
	};
	return (
		<div className='mx-auto mb-16 max-w-[952px] rounded-2xl bg-white px-20 py-8 shadow'>
			<div className='flex flex-col items-center justify-center gap-4'>
				<div className='inline-flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#FF4444] px-5'>
					<div className='text-center text-[28px] font-bold uppercase leading-[33.60px] text-white'>
						Xóa tài khoản Vĩnh viễn
					</div>
				</div>

				<Warning />
				<p className='w-[72%] text-center text-xl font-normal text-gray-500'>
					Khi bạn xóa tài khoản vĩnh viễn thì các dữ liệu và quyền lợi của bạn trên hệ thống của bạn
					sẽ bị ảnh hưởng như sau:
				</p>
			</div>
			{/*  */}

			<div className='grid grid-cols-1 text-gray-700 md:grid-cols-2'>
				<div className='flex items-start gap-3 border-b-2 border-r-2 border-[#99D4CD] px-6 py-4'>
					<img
						src='https://greenfinity.world/assets/images/delete-account-icon-1.png'
						height={32}
						width={32}
						alt='icon'
					/>
					<p>
						Xóa tài khoản là hành động <span className='font-bold'>không thể khôi phục</span>. Sau
						khi xóa tài khoản thành công, bạn{' '}
						<span className='font-bold'>không thể đăng nhập và xem lịch sử</span> trước đó của tài
						khoản đã xóa.
					</p>
				</div>
				<div className='flex items-start gap-3 border-b-2 border-[#99D4CD] px-6 py-4'>
					<img
						src='https://greenfinity.world/assets/images/delete-account-icon-2.png'
						height={32}
						width={32}
						alt='icon'
					/>
					<p>
						Bạn nên kiểm tra các <span className='font-bold'>đơn hàng đang xử lý</span> hoặc giao.
						Việc xóa tài khoản có thể{' '}
						<span className='font-bold'>ảnh hưởng đến quá trình xử lý đơn hàng</span> và yêu cầu hỗ
						trợ.
					</p>
				</div>
				<div className='flex items-start gap-3 border-r-2 border-[#99D4CD] px-6 py-4'>
					<img
						src='https://greenfinity.world/assets/images/delete-account-icon-3.png'
						height={32}
						width={32}
						alt='icon'
					/>
					<p>
						<span className='font-bold'>Toàn bộ GreeCoin</span> chưa sử dụng hết, Mã khuyến mãi,
						Voucher chưa sử dụng của bạn sẽ bị <span className='font-bold'>vô hiệu hóa</span>.
					</p>
				</div>
				<div className='flex items-start gap-3 px-6 py-4'>
					<img
						src='https://greenfinity.world/assets/images/delete-account-icon-4.png'
						height={32}
						width={32}
						alt='icon'
					/>

					<p>
						Sau khi xóa tài khoản thành công, GREEFinity vẫn{' '}
						<span className='font-bold'>lưu trữ thông tin giao dịch</span> để kiểm toán.
					</p>
				</div>
			</div>
			<div className='mt-6 flex gap-2'>
				<Button className='w-full rounded-lg bg-gray-200 px-4 py-6 text-lg text-gray-700'>
					Hủy bỏ
				</Button>
				<Button
					className='w-full rounded-lg bg-red-500 px-4 py-6 text-lg text-white'
					onClick={showModal}
				>
					Xóa tài khoản
				</Button>
			</div>
			<Modal
				title='Nhập lại mật khẩu'
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				className='title'
				styles={modalStyles}
				footer={[
					<Button
						key='cancel'
						onClick={handleCancel}
						className='border-none bg-[#F0F0F0] px-6 py-2'
					>
						Hủy bỏ
					</Button>,
					<Button
						key='ok'
						onClick={handleOk}
						className='border-none bg-red-500 px-6 py-2 text-white'
					>
						Xác nhận
					</Button>,
				]}
			>
				<div className='mb-5'>
					<Typography.Title level={5}>Mật khẩu hiện tại</Typography.Title>
					<Input.Password
						placeholder='Mật khẩu hiện tại'
						iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
					/>
				</div>
				<div>
					<Typography.Title level={5}>Xác nhận mật khẩu hiện tại</Typography.Title>
					<Input.Password
						placeholder='Xác nhận mật khẩu hiện tại'
						iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
					/>
				</div>
			</Modal>
		</div>
	);
};
export default DeleteAccountPage;
