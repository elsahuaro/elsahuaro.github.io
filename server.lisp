(in-package :cl-user)

(ql:quickload "hunchentoot")

(defvar server)

(defclass electoral-acceptor (hunchentoot:acceptor)
  ())

(defmethod hunchentoot:acceptor-dispatch-request ((acceptor electoral-acceptor) request)
  (let ((path (and (hunchentoot:acceptor-document-root acceptor)
                   (hunchentoot:request-pathname request)))
        (resource (hunchentoot:script-name request)))
    (cond
      (path
       (format t "~&PATH=~S~%RESOURCE=~S~%" path resource)
       (let ((probe (merge-pathnames path (hunchentoot:acceptor-document-root acceptor))))
         (cond ((char= #\/ (elt resource (1- (length resource))))
                (hunchentoot:handle-static-file
                 (merge-pathnames #p"index.html" probe)))
               ((not (pathname-type probe))
                (hunchentoot:redirect (concatenate 'string "/" (namestring path) "/")))
               (t
                (call-next-method)))))
      (t
       (call-next-method)))))

(defun start ()
  (hunchentoot:start
   (setf server
         (make-instance 'electoral-acceptor
                        :port 4242
                        :document-root (truename "./build")))))

(defun stop ()
  (when server
    (hunchentoot:stop server)
    (setf server nil)))

(defun refresh () (stop) (start))

(start)
